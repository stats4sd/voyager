"use strict";
// tslint:disable-next-line:no-var-requires
var fetchMock = require('fetch-mock');
var api_1 = require("./api");
var channel_1 = require("vega-lite/build/src/channel");
var type_1 = require("vega-lite/build/src/type");
var schema_1 = require("compassql/build/src/schema");
describe('api/api', function () {
    describe('fetchCompassQLRecommend', function () {
        var schema = new schema_1.Schema([]);
        var data = { url: 'a/file/path' };
        var q = {
            spec: {
                mark: '?',
                encodings: [
                    { channel: channel_1.Channel.X, field: '*', type: type_1.Type.QUANTITATIVE }
                ]
            },
            nest: [
                { groupBy: 'fieldTransform' }
            ],
            orderBy: 'effectiveness',
        };
        it('should return results for local recommend', function () {
            expect.assertions(1);
            return api_1.fetchCompassQLRecommend(q, schema, data).then(function (result) {
                return expect(result.items.length).toEqual(1);
            });
        });
        it('should return results for remote recommend', function () {
            fetchMock.postOnce('*', { items: ['1'] });
            expect.assertions(1);
            return api_1.fetchCompassQLRecommend(q, schema, data, { serverUrl: 'http://localhost' }).then(function (result) {
                return expect(result.items.length).toEqual(1);
            });
        });
    });
    describe('fetchCompassQLBuildSchema', function () {
        var data = [];
        it('should return results for local recommend', function () {
            expect.assertions(1);
            return api_1.fetchCompassQLBuildSchema(data).then(function (result) {
                return expect(result.fields().length).toEqual(0);
            });
        });
        it('should return results for remote recommend', function () {
            fetchMock.postOnce('*', []);
            expect.assertions(1);
            return api_1.fetchCompassQLBuildSchema(data, { serverUrl: 'http://localhost' }).then(function (result) {
                return expect(result.fields().length).toEqual(0);
            });
        });
    });
});