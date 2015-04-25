var React = require('react/addons');
    TestUtils = React.addons.TestUtils;

jest.dontMock("../../jestTest");

describe('test', function(){
  it('adds two numbers', function(){
    var add = require('../jestTest');
    expect(add(2, 3)).toBe(5);
  });  
});