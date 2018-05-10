# Azure Consolidated Template

These templates is the aggregation of various templates that were used to deploy to deploy the following configurations individually:

1. BYoL(Bring Your own License) instance with a "Single NIC".
2. BYoL(Bring Your own License) instance with two NICS i.e. "Multi NIC".
3. Hourly (Pay-as-you-Go) instance with "Single NIC" configuration.
4. Hourly (Pay-as-you-Go) instance with "Multi NIC" configuration.

The template provides all the parameters present in the individual templates for configuration along with two new parameters, viz.
1. Billing Method: It allows the user to choose between BYOL and PAYG as their preferred billing method.
2. Number of interfaces for the instance: It allows the user to choose whether they want a "Single NIC" or a "Multi NIC" instance.
