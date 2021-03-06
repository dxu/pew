/* @flow */
import Vector2 from './vector2';
import * as PIXI from 'pixi.js';
import {Time} from './constants/private';
import Sprite from './sprite';
import RigidBody from './rigidbody';
import type Clip from './clip';

import Loader from './loader';

import Gobi from './gobi';

import {Utils} from './util';

import type Scene from './scene';
import invariant from 'invariant';

import type {Collider} from './colliders/collider.type';

export type GobOptions = Object;

type GobMutableProps = {};

// Gob.rb
// Every Collider will be an object itself
// Rb will
export default class Gob extends Gobi {
  _id: number;
  scene: Scene;
  _destroyed: bool;
  __opts: GobOptions;
  direction: Vector2 = Vector2.Right;
  sprite: {
    width: number,
    height: number,
  };

  sprites: {
    [key: string]: {
      [sprite: string]: Sprite,
    },
  } = {};

  _previousSprite: Sprite = Sprite.emptySprite; // the string of the current loaded sprite for this instance
  currentSprite: Sprite = Sprite.emptySprite; // the string of the current loaded sprite for this instance
  collider: Collider;
  rigidbody: GobRigidBodyProps;
  static spriteSheets: {
    [key: string]:
      | {
          path: string,
          sprites: {
            [spriteName: string]: {
              frameStart: number,
              frameEnd: number,
              fps: number,
            },
          },
        }
      | {
          // if we don't have sprites, this is a regular png
          width: number,
          height: number,
          path: string,
        },
  };

  static __load(loader: Loader) {
    loader.loadSprite(this);
    for (const key in this.audioSources) {
      loader.loadAudioClip(this, key, this.audioSources[key]);
    }
  }

  // can support multiple audio sounds. You will be able to reference them
  static audioSources: {[id: string]: string};
  // the audio object from which you can now access sounds! Default it to {}
  static __audio: {[id: string]: Clip} = {};

  debug: bool;
  _debugData: Object;

  // depth of the sprite. Can be calculated as an explicit number, or a function
  depth: number | Function = 0;

  // possible options:
  // {
  //   transform: {
  //     position: Vector2,
  //     scale?: Vector2,
  //     angle?: number,
  //   },
  //   sprite: {
  //     width: number,
  //     height: number,
  //     anchor?: Vector2,
  //     rotation?: number,
  //     scale?: Vector2,
  //     pixi: PIXI.Sprite,
  //     loop?: boolean,
  //   },
  // }
  // Rigid bodies and Colliders should be set on the class itself

  // This is the method that is called invisibly to set up the rigidbody +
  // collider stuff
  __init(scene: Scene, opts: GobOptions) {
    super.__init(scene, opts);

    if (this.rigidbody) {
      this.rigidbody.__init(this.scene.world, this);
    }

    // default to no debug
    this.debug = opts.debug || false;
  }

  setDirection(direction: Vector2) {
    invariant(
      direction instanceof Vector2,
      '[gob.js] setDirection must take in a Dough.Vector2',
    );
    this.direction = direction;
  }

  _updateSprite() {
    // stop and replace the current sprite
    if (this._previousSprite) {
      if (this.currentSprite._id === this._previousSprite._id) {
        return;
      }
      this._previousSprite.hide();
      this._previousSprite.stop();
    }
    // add the new sprite to the stage
    this.currentSprite.show();
    this.currentSprite.play();
  }

  _setSprite(sprite: Sprite) {
    this._previousSprite = this.currentSprite;
    this.currentSprite = sprite;
  }

  // if there is no spriteKey passed, then that means they aren't using the
  setSprite(sheetKey: string, spriteKey?: string) {
    invariant(
      this.sprites[sheetKey],
      `[Gob.js] No sprite or spritesheet found for ${sheetKey}, ${spriteKey}`,
    );

    this._setSprite(
      this.sprites[sheetKey][spriteKey] || this.sprites[sheetKey],
    );
  }

  // this will be called when resources have been loaded
  // this should create all the possible sprites that can be possible from your
  // specified options
  __initSprite() {
    const gobClass = this.constructor;
    // if no sprites, then just return
    if (!gobClass.spriteSheets) {
      return;
    }
    const opts = this.__opts;

    // create sprites out of the loaded resource based on the sprite class var
    const sheets = Object.keys(gobClass.spriteSheets);
    // for every sheet, create a sprite out of every sprite
    sheets.map(sheetKey => {
      const sprites = gobClass.spriteSheets[sheetKey].sprites;
      this.sprites[sheetKey] = {};
      Object.keys(sprites).map(spriteKey => {
        this.sprites[sheetKey][spriteKey] = new Sprite({
          // TODO: TYPE THIS
          gob: this,
          pixiKey: Utils.getPixiResourceKey(gobClass.name, sheetKey),
          path: gobClass.spriteSheets[sheetKey].path,
          frameStart: sprites[spriteKey].frameStart,
          frameEnd: sprites[spriteKey].frameEnd,
          fps: sprites[spriteKey].fps,
          width: sprites[spriteKey].width,
          height: sprites[spriteKey].height,
          anchor: sprites[spriteKey].anchor,
          loop: sprites[spriteKey].loop,
          instance: opts.sprite,
        });
        // add each sprite to the stage
        this.scene.stage.addChild(this.sprites[sheetKey][spriteKey]._pixi);
      });
    });

    const firstSpriteSheet = this.sprites[Object.keys(this.sprites)[0]];
    // default to the first sprite as the current sprite
    this._setSprite(firstSpriteSheet[Object.keys(firstSpriteSheet)[0]]);
  }

  __onSceneLoad() {
    this.__initSprite();
    if (this.debug) {
      this._setupDebug(this.scene);
      this._debug();
    }
  }

  _setupDebug(scene: Scene): void {
    this._debugData = {};
    this._debugData.colliderOutline = new PIXI.Graphics();
    // debug should always appear on top
    this._debugData.colliderOutline.zDepth = Infinity;
    this._debugData.spriteOutline = new PIXI.Graphics();
    this._debugData.spriteOutline.zDepth = Infinity;
    this.scene.stage.addChild(this._debugData.colliderOutline);
    this.scene.stage.addChild(this._debugData.spriteOutline);
    // Note: the outline will be added to the stage by the scene object!
  }

  __update(): void {}

  // this is the update that is publicly called and should be overridden
  update(): void {}

  // public version
  prePhysicsUpdate(): void {}
  __prePhysicsUpdate(): void {
    // adjust the collider body velocities to be time per step to fit matter.js
    // instead of time per step
    // Matter.Body.setVelocity(
    //   this.collider.body,
    //   Matter.Vector.create(
    //     this.rigidbody.velocity.x * Time.dts,
    //     this.rigidbody.velocity.y * Time.dts,
    //   ),
    // );
  }

  // public version
  postPhysicsUpdate(): void {}
  // this is where you add post checks
  __postPhysicsUpdate(): void {
    if (!this.collider && !this.rigidbody) {
      return;
    }
    this.__updatePostCollisionAttributes();
    // update the sprite to new one
    this._updateSprite();
    this.currentSprite.update();
    // TODO: ideally we shouldn't even have to run this check in production :(
    // if this.debug is set, turn on debug mode
    if (this.debug) {
      this._debug();
    }
  }

  // update the rendered attributes
  __updatePostCollisionAttributes() {
    // Multiply by Time.dts to convert from matter to Dough coords
    this.transform.position.x = this.rigidbody.collider.body.position.x;
    this.transform.position.y = this.rigidbody.collider.body.position.y;
    // this.transform.angle = this.collider.body.angle * 180 / Math.PI;
    // this.rigidbody.velocity.x = this.collider.body.velocity.x / Time.dts;
    // this.rigidbody.velocity.y = this.collider.body.velocity.y / Time.dts;
  }

  _debug(): void {
    // update the spriteOutline
    this._debugData.spriteOutline.clear();
    this._debugData.spriteOutline.lineStyle(1, 0x428ff4, 0.9);
    this._debugData.spriteOutline.drawRect(
      0,
      0,
      this.currentSprite.width,
      this.currentSprite.height,
    );

    this._debugData.spriteOutline.setTransform(
      this.transform.position.x,
      this.transform.position.y,
    );
    this._debugData.spriteOutline.rotation =
      this.transform.angle * Math.PI / 180;

    this._debugData.spriteOutline.pivot.x = this.currentSprite.width / 2;
    this._debugData.spriteOutline.pivot.y = this.currentSprite.width / 2;

    // update the colliderOutline
    if (this.rigidbody) {
      this._debugData.colliderOutline.clear();
      this._debugData.colliderOutline.lineStyle(1, 0xf44265, 0.9);

      const path: Array<number, > = this.rigidbody.collider.body.vertices.reduce(
        (
          memo: Array<number>,
          vertex: Vector2,
          index: number,
          arr: Array<Vector2>,
        ): Array<number> => {
          memo.push(vertex.x);
          memo.push(vertex.y);
          if (index === arr.length - 1) {
            memo.push(arr[0].x);
            memo.push(arr[0].y);
          }
          return memo;
        },
        [],
      );
      this._debugData.colliderOutline.drawPolygon(path);
    }
  }

  // should be overridden
  onCollide(pair: Matter.Pair): void {}
  onCollideEnd(pair: Matter.Pair): void {}
  onCollideActive(pair: Matter.Pair): void {}

  // remove all references. Enforce asynchronicity so that it will finish one
  // update before executing
  destroy(): void {
    // We still need to set state for whether or not this object is destroyed
    // already
    // Imagine one huge object that gets hit by two other objects. It will try
    // to destroy itself twice no matter how you structure the contact cache
    if (this._destroyed) {
      return;
    }

    this.scene.removeGob(this);

    // TODO: for some reason this still gets called a bunch of times?
    // Problem: can't actually just let it run because if i call destroy() in
    // onCollide, the objects gets destroyed before the other objects get to use
    // it in their onCollide
    window.requestAnimationFrame((): void => {
      // TODO: I don't think I actually need to do any of the following
      delete this._id;
    });
    this._destroyed = true;
  }

  playAudio(key: string, volume?: number) {
    this.constructor.__audio[key].play(volume);
  }
}
