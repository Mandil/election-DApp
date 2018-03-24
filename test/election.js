var Election = artifacts.require("./Election.sol");

contract('Election', function(accounts) {
  var electionInstance;
  
  it('initializes 2 candidates', function() {
    return Election.deployed().then(function(instance){
      return instance.candidatesCount();
    }).then(function(count){
      assert.equal(count, 2);
    });
  });

  it('initializes candidates with currect value', function(){
    return Election.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 1, 'has the correct id');
      assert.equal(candidate[1], 'Trump', 'has the correct name');
      assert.equal(candidate[2], 0, 'has the correct voting count');
      return electionInstance.candidates(2);
    }).then(function(candidate) {
      assert.equal(candidate[0], 2, 'has the correct id');
      assert.equal(candidate[1], 'Clinton', 'has the correct name');
      assert.equal(candidate[2], 0, 'has the correct voting count');
    });
  });

});
