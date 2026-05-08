const { Engine, Render, Runner, World, Bodies } = Matter;

// Portrait
const WIDTH = 450;
const HEIGHT = 800;

const engine = Engine.create();
const world = engine.world;

world.gravity.y = 0;

const render = Render.create({
  canvas: document.getElementById("game"),
  engine,
  options: {
    width: WIDTH,
    height: HEIGHT,
    wireframes: false,
    background: "#2c8a3f",
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

const bowl = Bodies.circle(WIDTH / 2, HEIGHT - 80, 18, {
  restitution: 0.9,
  frictionAir: 0.02,
  render: { fillStyle: "#e8d7a8" },
});

const jack = Bodies.circle(WIDTH / 2, 120, 10, {
  isStatic: true,
  render: { fillStyle: "#ffffff" },
});

World.add(world, [bowl, jack]);
