Feature: Movies list
  As a user
  I want to list the movies
  In order to know which movies are in the library

  Scenario: Get movies list
    Given I've got the movies list
    Then the movies will be ordered by popularity descendant

  Scenario: Fetch more movies
    Given I've got the movies list
    When I get the page number 2
    Then more movies will be fetched