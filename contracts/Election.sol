pragma solidity ^0.4.11;

contract Election {
  // Store candidates
  // Read candidates
  string public candidate;
  // constructor
  function Election () public {
    candidate = 'Trump';
  }
}
