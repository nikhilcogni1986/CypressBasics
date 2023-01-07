    Feature: End to End eCommerce validation

    Scenario: Ecommerce Products delivery
    Given I open ecommerce website
    When I add items to cart
    When validate the total prices 
    Then select the country submit and verify the success