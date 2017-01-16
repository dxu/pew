declare module "matter-js" {

  declare type BodyOptionsType = Object;
  declare type EngineOptionsType = Object;
  declare type SpritePropertiesType = {
    texture: string,
    xOffset: number,
    xScale: number,
    yOffset: number,
    yScale: number,
  };
  declare type RenderPropertiesType = {
    fillStyle: string,
    lineWidth: number,
    opacity: number,
    sprite: SpritePropertiesType,
    strokeStyle: string,
    visible: bool,
  };
  declare type CompositeOptionsType = {
    bodies: Array<Body>,
    composites: Array<Composite>,
    constraints: Array<Constraint>,
    id: number,
    isModified: bool,
    label: String,
    parent: Composite,
    type: String,
  };

  declare type Bounds = {};
  declare type World = {};
  declare type Grid = {};
  declare type Constraint = {};
  declare type Vector = {};
  declare type Render = {};

  declare class Body {
    static applyForce(body: Body, position: Vector, force: Vector): void;
    static create(options: BodyOptionsType): Body;
    static nextCategory(): number;
    static nextGroup(isNonColliding?: bool): number;
    static rotate(body: Body, rotation: number): void;
    static scale(body: Body, scaleX: number, scaleY: number, point: Vector): void;
    static set(body: Body, settings: BodyOptionsType, value: Object): void;
    static setAngle(body: Body, angle: number): void;
    static setAngularVelocity(body: Body, velocity: number): void;
    static setDensity(body: Body, density: number): void;
    static setInertia(body: Body, inertia: number): void;
    static setMass(body: Body, mass: number): void;
    static setParts(body: Body, body?: Body, autoHull?: bool): void;
    static setPosition(body: Body, position: Vector): void;
    static setStatic(body: Body, isStatic: bool): void;
    static setVelocity(body: Body, velocity: Vector): void;
    static setVertices(body: Body, vertices: Array<Vector>): void;
    static translate(body: Body, translation: Vector): void;
    static update(body: Body, deltaTime: number, timeScale: number, correction: number): void;

    angle: number,
    angularSpeed: number,
    angularVelocity: number,
    area: string,
    axes: Array<Vector>,
    bounds: Bounds,
    collisionFilter: {
      goup: number,
      category: number,
      mask: number,
    },
    density: number,
    force: Vector,
    friction: number,
    frictionAir: number,
    frictionStatic: number,
    id: number,
    inertia: number,
    inverseInertia: number,
    inverseMass: number,
    isSensor: bool,
    isSleeping: bool,
    isStatic: bool,
    label: string,
    mass: number,
    motion: number,
    parent: Body,
    parts: Array<Body>,
    position: Vector,
    render: RenderPropertiesType,
    restitution: number,
    sleepThreshold: number,
    slop: number,
    speed: number,
    timeScale: number,
    torque: number,
    type: string,
    velocity: Vector,
    vertices: Array<Vector>,
  }

  declare class Composite {
    static add(composite: Composite, object: Object): Composite;
    static allBodies(composite: Composite): Array<Body>;
    static allConstraints(composite: Composite): Array<Constraint>;
    static clear(composite: Composite, keepStatic: bool, deep?: bool): Composite;
    static create(options?: CompositeOptionsType): Composite;
    static get(composite: Composite, id: number, type: number): Object;
    static move(compositeA: Composite, objects: Array<Object>, compositeB: Composite): Composite;
    static rebase(composite: Composite): Composite;
    static remove(composite: Composite, object: Object, deep?: bool): Composite;
    static rotate(composite: Composite, rotation: number, point: Vector, recursive?: bool): void;
    static scale(composite: Composite, scaleX: number, scaleY: number, point: Vector, recursive?: bool): void;
    static setModified(composite: Composite, isModified: bool, updateParents?: bool, updateChildren?: bool): void;
    static translate(composite: Composite, translation: Vector, recursive: bool): void;
    // CompositeOptionsType
    bodies: Array<Body>,
    composites: Array<Composite>,
    constraints: Array<Constraint>,
    id: number,
    isModified: bool,
    label: String,
    parent: Composite,
    type: String,
  }

  declare class Engine {
    static clear(engine: Engine): void;
    static create(options?: EngineOptionsType): Engine;
    static merge(engineA: Engine, engineB: Engine): void;
    static run(engine: Engine): void;
    // delta defaults to 16.666, correction defaults to 1
    static update(engine: Engine, delta: number, correction: number): void;

    broadphase: Grid,
    constraintIterations: number,
    enableSleeping: bool,
    positionIterations: number,
    // DEPRECATED!
    render: Render,
    timing: {
      timeScale: number,
      timestamp: number,
      velocityIterations: number,
    },
    world: World,
  }
}