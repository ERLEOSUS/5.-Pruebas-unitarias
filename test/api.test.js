const request = require('supertest');
const app = require('../src/app');



describe('GET /users', () => {
    it('TEST 01 Responde con json y contiene una lista de usuarios', done => {
        request(app)
            .get('/users')
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('TEST 02 Respuesta cuando llamo por id', (done) => {
        request(app)
            .get('/users/U001')
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('TEST 03 Respuesta cuando llamo por id y no funciona', (done) => {
        request(app)
            .get('/users/afdfdf')
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('Usuario no encontrado')
        done();
    });
});


describe("POST /users", () => {
    it('TEST 05 usuario creado', done => {
        const data = {
            username: 'admin',
            password: 'admin01'
        }
        request(app)
            .post('/users')
            .send(data)
            .set("Aceptado", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it('TEST 06: usuario no creado', (done) => {
        const data = {};
        request(app)
            .post('/users')
            .send(data)
            .set("Aceptado", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .expect('Usuario no creado')
            done();
        }); 
    it('TEST 06 usuario no creado', done=>{
        const data={};
        request(app)
        .post('/users')
        .send(data)
        .set("Aceptado","application/json")
        .expect("Content-Type", /json/)
        .expect(400)
        .expect('"Usuario no creado"')
        done();
    });
});
