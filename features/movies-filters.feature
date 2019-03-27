Feature: Movies filters
  As a user
  I want to filter the movies list
  In order to find just what I want

  Scenario: Filter per one genre
    Given I've got the movies list
    When I filter per one genre
    Then all movies will have this genre

  Scenario: Filter per two genres
    Given I've got the movies list
    And I've filtered per one genre
    When I filter per another genre
    Then all movies will have the two genres