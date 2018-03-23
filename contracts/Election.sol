pragma solidity ^0.4.2;

contract Election {
  // Model a candidate
  struct Candidate {
    uint id;
    string name;
    uint voteCount;
  }

  // Store candidates
  // Fetch candidate
  mapping(uint => Candidate) public candidates;
  // Store Candidates Counts
  uint public candidatesCount;

  // constructor, note: constructor is a function that dosent have name, instead it refrences the contract name (ie Election)
  function Election () public {
    addCandidate('Trump');
    addCandidate('Clinton');
  }

  // add candidates
  function addCandidate (string _name) private {
    candidatesCount ++;
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
  }
}
