Feature: Search movie
  As a user
  I want to search a movie
  In order to find the movie I'm looking for

  Scenario: Search movie
    Given I've gone to homepage
    When I type "Batman" on search box
    And I type the enter key
    Then movies related with "Batman" will be listed
