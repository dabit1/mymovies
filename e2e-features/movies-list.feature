Feature: Movies list
  As a user
  I want to view the movies list
  In order to discover movies

  Scenario: View filters list
    Given I've gone to homepage
    When I see the filters
    Then I will see a checkbox per each filter

  Scenario: View movies
    Given I've gone to homepage
    When I see the movies
    Then I will see a list with movies images and its titles
  
  Scenario: View more movies
    Given I've gone to homepage
    When I scroll down movies list
    Then I will see more images

  Scenario: View search box
    Given I've gone to homepage
    When I see the search box
    Then I will see a input text

  Scenario: Movie details
    Given I've gone to homepage
    When I click on a movie
    Then a modal box will be showed with the movie details