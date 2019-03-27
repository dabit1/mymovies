Feature: Movies filters
  As a user
  I want to filter the movies list
  In order to discover movies

  Scenario: Select filter
    Given I've gone to homepage
    When I select a filter
    Then this filter will be selected
    And movies will be filtered by the filter selected

  Scenario: Deselect filter
    Given I've gone to homepage
    And I've selectd a filter
    When I deselect this filter
    Then this filter will be deselected
    And movies will not be filtered