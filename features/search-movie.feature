Feature: Search movie
  As a user
  I want to search a movie
  In order to find the movie I want

  Scenario: Seach by title
    Given I've got the movies list
    When I search a movie by title
    Then I will a list of results which match the text I searched
