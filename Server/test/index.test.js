const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de rutas", () => {
    describe("Test de RUTAS", () => {
        describe("GET /rickandmorty/character/:id", () => {
            it("Responde con status: 200", async () => {
                await agent.get("/rickandmorty/character/1").expect(200);
            });

            it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
                const { body } = await agent.get("/rickandmorty/character/1");
                expect(body).toHaveProperty("id");
                expect(body).toHaveProperty("name");
                expect(body).toHaveProperty("species");
                expect(body).toHaveProperty("gender");
                expect(body).toHaveProperty("status");
                expect(body).toHaveProperty("origin");
                expect(body).toHaveProperty("image");
            });
            it("Si hay un error responde con status: 500", async () => {
                await agent.get("/rickandmorty/character/-1").expect(500);
            });
        });

        describe("GET /rickandmorty/login", () => {
            it("Responde con true para las credenciales correctas", async () => {
                const { body } = await agent.get(
                    "/rickandmorty/login?email=algo@algo.com&password=123asd"
                );
                expect(body).toEqual({
                    access: true,
                });
            });
            it("Responde con false para las credenciales incorrectas", async () => {
                const { body } = await agent.get(
                    "/rickandmorty/login?email=algo@algo.com&password=asd123"
                );
                expect(body.access).toBeFalsy();
            });
        });

        describe("POST /rickandmorty/fav", () => {
            const character1 = {
                id: 1,
                name: "anyName",
            };
            const character2 = {
                id: 2,
                name: "anyName2",
            };
            it("Devuelve un array creado en base al personaje enviado", async () => {
                const { body } = await agent.post("/rickandmorty/fav").send(character1);
                expect(body).toBeInstanceOf(Array);
                expect(body).toContainEqual(character1);
            });

            it("Si se envia otro character, debe ser devuelto con los anteriores", async () => {
                const { body } = await agent.post("/rickandmorty/fav").send(character2);
                expect(body).toBeInstanceOf(Array);
                expect(body).toContainEqual(character1);
                expect(body).toContainEqual(character2);
            });
        });

        describe("DELETE /rickandmorty/fav/:id", () => {
            it("Debe devolver el arreglo con todos los personajes si no encuentra ningun personaje con el ID enviado", async () => {
                const { body } = await agent.delete("/rickandmorty/fav/3");
                expect(body).toBeInstanceOf(Array);
                expect(body).toEqual([
                    {
                        id: 1,
                        name: "anyName",
                    },
                    {
                        id: 2,
                        name: "anyName2",
                    },
                ]);
            });
            it("Debe eliminar corractamente el personaje", async () => {
                const { body } = await agent.delete("/rickandmorty/fav/1");
                expect(body).toBeInstanceOf(Array);
                expect(body).toEqual([
                    {
                        id: 2,
                        name: "anyName2",
                    },
                ]);
            });
        });
    });
})