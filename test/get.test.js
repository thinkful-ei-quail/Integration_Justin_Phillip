require('dotenv').config();
const {app, PORT} = require('../server');
const request = require('supertest');
const expect = require('chai').expect;

describe('GET /movie', () => {
    it('should return an array of movies',  () => {
        return request(app)
            .get('/movie')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.be.an('array');
            });
    });
});