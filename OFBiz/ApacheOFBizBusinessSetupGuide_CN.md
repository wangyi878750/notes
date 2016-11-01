# Apache OFBiz Business Setup Guide

> 译自官方[WIKI](https://cwiki.apache.org/confluence/display/OFBENDUSER/Apache+OFBiz+Business+Setup+Guide)，版本截止日期 2016年10月11日。

### 本文重点主要在于介绍 OFBiz 电子商务的基本配置。

NOTE: 技术文档请参考另外一文，[点此阅读](/ApacheOFBizTechnicalProductionSetupGuide_CN.md)。

## Table of Contents

1.  [Purpose and Goal of This Document](#ApacheOFBizBusinessSetupGuide-purpAndGoal)
2.  [Data To Gather for Setup](#ApacheOFBizBusinessSetupGuide-dataToGather)
3.  [General Terms and Information](#ApacheOFBizBusinessSetupGuide-generalTerms)
    1.  [OFBiz "Manager" Applications](#ApacheOFBizBusinessSetupGuide-managerApplications)
    2.  [Other OFBiz Terms](#ApacheOFBizBusinessSetupGuide-otherOfbizTerms)
4.  [Business Setup Process](#ApacheOFBizBusinesStore - Payments tabsSetupGuide-businessSetupProcess)
    1.  [General Company Setup](#ApacheOFBizBusinessSetupGuide-generalCompanySetup)
        1.  [Company Contact Information](#ApacheOFBizBusinessSetupGuide-companyContactInformation)
    2.  [Facility (Warehouse) Setup](#ApacheOFBizBusinessSetupGuide-facilityWarehouseSetup)
    3.  [WebSite Setup](#ApacheOFBizBusinessSetupGuide-webSiteSetup)
    4.  [Store Setup](#ApacheOFBizBusinessSetupGuide-storeSetup)
        1.  [Store Settings](#ApacheOFBizBusinessSetupGuide-storeSettings)
        2.  [Store Role Settings](#ApacheOFBizBusinessSetupGuide-storeRoleSettings)
        3.  [Promotional Settings](#ApacheOFBizBusinessSetupGuide-promotionalSettings)
        4.  [Catalog Settings](#ApacheOFBizBusinessSetupGuide-catalogSettings)
        5.  [Web Site Settings](#ApacheOFBizBusinessSetupGuide-webSiteSettings)
        6.  [Sales Tax Settings](#ApacheOFBizBusinessSetupGuide-salesTaxSettings)
        7.  [Store Shipping Settings](#ApacheOFBizBusinessSetupGuide-ShippingSettings)
            1.  [UPS Online Rate Estimates](#ApacheOFBizBusinessSetupGuide-upsOnlineRateEstimates)
            2.  [UPS XPCI Integration](#ApacheOFBizBusinessSetupGuide-upsXpciIntegration)
            3.  [USPS Online Rate Estimates](#ApacheOFBizBusinessSetupGuide-uspsOnlineRateEstimates)
        8.  [Store Payment Settings](#ApacheOFBizBusinessSetupGuide-storePaymentSettings)
            1.  [Payment Processor Details](#ApacheOFBizBusinessSetupGuide-paymentProcessorDetails)
            2.  [PayPal Payment Setup](#ApacheOFBizBusinessSetupGuide-payPalPaymentSetup)
            3.  [Payflow Pro Payment Setup](#ApacheOFBizBusinessSetupGuide-payflowProPaymentSetup)
            4.  [CyberSource Payment Setup](#ApacheOFBizBusinessSetupGuide-cyberSourcePaymentSetup)
            5.  [Authorize.net Payment Setup](#ApacheOFBizBusinessSetupGuide-authorizenetPaymentSetup)
            6.  [RBS WorldPay Payment Setup](#ApacheOFBizBusinessSetupGuide-RBSWorldPayPaymentSetup)
            7.  [Giftcards](#ApacheOFBizBusinessSetupGuide-giftCardsSetup)
        9.  [e-mail Settings](#ApacheOFBizBusinessSetupGuide-emailSettings)
        10.  [Survey Settings](#ApacheOFBizBusinessSetupGuide-surveySettings)
        11.  [General Settings Override](#ApacheOFBizBusinessSetupGuide-generalSettingsOverride)
    5.  [Catalog, Category, Product Setup](#ApacheOFBizBusinessSetupGuide-catalogCategoryProductSetup)
        1.  [Catalog Setup](#ApacheOFBizBusinessSetupGuide-catalogSetup)
        2.  [Category Setup](#ApacheOFBizBusinessSetupGuide-categorySetup)
        3.  [Product Setup](#ApacheOFBizBusinessSetupGuide-productSetup)
            1.  [Add Content to the New Product](#ApacheOFBizBusinessSetupGuide-addContentToTheNewProduct)
            2.  [Add Prices to the Product](#ApacheOFBizBusinessSetupGuide-addPricesToTheProduct)
    6.  [Accounting Organization and Setup Process](#ApacheOFBizBusinessSetupGuide-accountingSetup)
    7.  [Marketing introduction](#ApacheOFBizBusinessSetupGuide-marketingSetup)

## Purpose and Goal of This Document

In addition to being an excellent development framework and platform for enterprise information automation, OFBiz also features many great applications that can be used out of the box without a lot of customization. However, since it is enterprise class software, there are a lot of configuration options, settings, and data structures that require some level of familiarity.

The purpose of this document is to help you get OFBiz setup for production use, with an emphasis on eCommerce deployments. This is not meant to be a complete discussion of issues or decisions to make or options to configure, just an overview of the basic settings that need to be configured for a production instance of OFBiz.

This document is meant to be a series of instructions to be followed in order, except where a part of the document says otherwise (there are very few). Of course, if you feel comfortable with the topics discussed here you can use it as a reference and not follow it as a list of instructions.

NOTE: We recommend that you read this entire document before starting the process or making any changes. While you are reading it is helpful to look at the files and web pages in question so you can visualize better where things go and what they look like. Naturally you can ignore this, but a half hour studying this document could save you a lot of time late

Note on Typographic Conventions Used in This Document

Text enclosed in a square box such as [[ ]] represents an OFBiz application browser tab selection.

Throughout the document the author has provided expert advice or other observations. These notations are indicated as follows:

Expert Recommendations: Here is some text you better pay attention to!

A notation used throughout this document to indicate the starting directory (or root) location for the OFBiz installation is \${ofbiz install dir}. This is typically followed by the path name location of the file or directory being discussed.

Where OFBiz application manager web tools have individual page name or table name titles, the page names and titles are highlighted with a background color: This Is A Page

## Data To Gather for Setup 

1.  Company Party (Party Manager -> Find -> Profile; partyId: Company)
    1.  Name
    2.  Customer Service
        1.  Telephone Number
        2.  Email Address
        3.  Correspondence Postal Address
2.  Warehouse Facilities (Facility Manager -> Facilities -> Facility)
    1.  Title for each (ie Web Store Warehouse, or California Warehouse, or Burbank Distribution Center)
    2.  Telephone Number
    3.  Shipping & Receiving Postal Addresses (with names)
3.  Email Settings (general.properties)
    1.  SMTP Server (relay host)
    2.  SMTP Username (if needed)
    3.  SMTP Password (if needed)

## General Terms and Information 

### OFBiz "Manager" Applications

OFBiz provides a number of Manager applications, which make up the "back office" functions of the suite. These applications are not intended to be customer or public facing, but rather tools to be used to administer and manage the OFBiz software. Manager applications are, by default, accessible using standard URL addressing and built-in OFBiz security services.

Manager applications which will be referenced in this document include the:
"Catalog Manager" accessed at:

   http://localhost:8080/catalog/control/main


"Party Manager" accessed at:

   http://localhost:8080/partymgr/control/main


More technical web based tools, or tools for the OFBiz framework are available in the "Web Tools" application: [http://localhost:8080/webtools/control/main](http://localhost:8080/webtools/control/main)

Note: OFBiz will automatically make adjustments between non-secure and secure pages based on login requirements. Therefore, you can use the http (non-secure) notation to access the above mentioned manager applications when first attempting to access them.

Once you are logged in to any of the OFBiz Manager Applications, tabs across the top will be in place to allow you to easily switch from one application to another, or to open them in a separate window or browser tab.

### Other OFBiz Terms  

In OFBiz a "Party" refers to a single entity such as a human being or a company or a family or even a group of friends. In other words, it can represent an individual (a Person) or a group of parties, including individuals and other groups (a Party Group).

The "Entity Engine" refers to the embedded OFBiz database access engine. Likewise there are other "engines" in OFBiz including the Service Engine which is another critical tool that is the foundation of the service oriented architecture for logic and processes in OFBiz.

## Business Setup Process 

### General Company Setup 

There is a Party with the ID "Company" that is configured as the default Party that represents the company that owns or is running the system. You can have multiple organizations configured in the system, but this one is referred to be default in the Demo Product Store (which we will be modifying and not replacing in a minute).

#### Company Contact Information  

In the Party Manager "Find" page type in "Company" in the Party ID field and press enter. This will bring up the View Profile page for the Party.

On this screen change the existing address which represents the "Billing (AP) Address", "Payment (AR) Address", and "General Correspondence Address". Note that if desired you can remove purpose(s) from this address and create other addresses for those purposes.

You should also setup any telephone numbers and email addresses you want for your Company.

### Facility (Warehouse) Setup  

There is a Facility with the ID "WebStoreWarehouse" that we will be modifying in this step. This is the default fulfillment facility for the Demo Store (which we will be modifying and not replacing soon). You can create other Facilities here, but for this basic setup we will keep the single warehouse configuration and modify this warehouse in place.

In the Facilities List in the Facility Manager click on the "Web Store Warehouse" link, and for that facility click on the "ContactMechs" tab/button.
There is already an address setup that is a Shipping Destination Address and a Shipping Origin Address. To setup your Facility's address just "Update" this address.
There is already a phone number setup that is a Shipping Destination Phone Number and a Shipping Origin Phone Number. To setup your Facility's phone number just "Update" this phone number.

There are various other things that can be setup here including more advanced options such as Facility Locations for inventory, and so on. This is also where you can go to manage picking/packing and shipping of orders, and the receiving of returns, purchase orders, and so on.

### WebSite Setup 

There is a WebSite already setup with the ID "WebStore". This ID is referred to in the webSiteId field of the web.xml file in the eCommerce webapp.

For this basic setup we will leave this as is. If you create a custom webapp for your ecommerce site, be sure to set the appropriate webSiteId in the web.xml file.

The WebSite record is used to configure which Product Store to use for the ecommerce site that references it. This WebSite is already configured to refer to the "OFBiz E-Commerce Store", which we will be modifying, so there is no need to change anything here.

Note that the settings in the url.properties file can be overridden for each WebSite, as can be seen on the Edit Web Site page in the Content Manager.

### Store Setup 

There is a demo eCommerce store already setup with most of the options we need, so instead of creating a new one we will use that one and just change it's name and other options. The ID, which is 9000, will stay the same.

To modify this store go to the Catalog Manager application and select the Stores top level tab. This will bring up a Product Store List. Select the store with ID 9000, which by default has the name "OFBiz E-Commerce Store".

As we setup the store we will cover each tab in order and discuss options on that page and related options in configuration files:

#### Store Settings 

Change the Store Name to something more applicable. This is mostly for internally referring to your store and won't be shown to the customer.

Change the Company Name to something more applicable, as desired.
There are various settings that can be used to change the way things show up in the default OFBiz eCommerce templates. You can change these for options you prefer, or for most fields you can empty them to have nothing displayed there.
The Title and Subtitle show in the header.

The Style Sheet refers to a CSS style sheet to use for the colors, fonts, etc for the site.

The Header Logo, Header Middle Background, and Header Right Background specify images in the 3 main areas of the header. To show no images, or background images, leave these blank.

The Pay To Party Id field is already set to Company as it should be, and that is the Party we configured earlier. For multiple organizations or if you have another company Party setup the party ID can be specified here.

To remove the demo messages on the checkout screens and order emails change the Is Demo Store field from Y to N.

The Inventory Facility Id and the various inventory settings are already setup with good default, but you may review and change them as desired. Typically the only one you may want to change is the Require Inventory field. By default it is set to N, but changing it to Y will cause products to only be purchasable if they are in stock.

There are many other settings on the Store, most of which you won't want to touch. For more information on them see the Undersun documentation site or other such reference material

#### Store Role Settings 

There are various reasons why you might want to associate a Party with a Store. The main one to consider is in order for a Party to take sales orders for a specific Store the Party must be associated with the Store in the "Sales Representative" role.

#### Promotional Settings  

This is where you can associate promotions (setup in the Promos header tab) with the store, including effective dating, sequencing and so forth.

There are all example promotions and it is good to keep them in the database for future reference, but you can delete all of these store associations so they won't get in the way for this store. Just click on the "[Delete]" link for each one.

#### Catalog Settings 

This tab shows all Product Catalogs associated with this Store. The demo data has two Catalogs associated by default, and you can remove both of them since we will be creating a new Catalog later. These two you can leave in the database as examples for future reference, but click on the "[Delete]" buttons here to remove the associations with the Store.

#### Web Site Settings 

This tab shows all WebSites associated with this store, or that this store is associated with. You will see that the demo data already has this Store associated with the eCommerce Web Site, and the Order Entry Web Site.
Leave these defaults as they are.

If you have your own ecommerce webapp and have created a WebSite for it as described above, associate that WebSite with the store.

#### Sales Tax Settings 

It is possible to use other tax calculation services or integrate with other tax calculation software, and there are others included with OFBiz, but the default one uses a simple OFBiz entity with records for different tax jurisdictions and effective dates.

The demo data includes one example that applies for any Country, State, and Tax Category, has no Minimum Purchase amount, and the tax rate is 10%. Note that the tax rate is entered as a decimal number and not a whole percentage number. In other words, 10% is entered as "0.10" as shown in this example.

Delete the example sales tax entry and enter tax rates for any jurisdictions where you must collect a sales tax.

For more complicated tax requirements and data that is kept up to date consider commercial options. There is a TaxWare integration in OFBiz, but this runs through JNI to talk to the native TaxWare libraries (ie non-Java) and requires a lot of maintenance to use over time. Another option available in OFBiz is support for the ZipSales tax database, which can be imported and then updates are imported on a regular basis.

#### Shipping Settings 

Each Store may have one or more shipping options configured. Shipping options consist of shipping methods, shipping providers and rules which link methods, providers and cost estimate calculations. The OFBiz e-commerce demonstration data is preconfigured with a number of shipping methods including "Ground", "Air", "Next Day" and "None" and several well know shipping providers including, United Parcel Service (UPS), the United States Post Office (USPS). In addition, templates for cost estimate rules are provided to ease the customization process. Finally, OFBiz provides interfaces, and in some cases, rudimentary configuration guidance, to allow the e-commerce store to connect directly and communication with several major shipping providers.

4 Expert Recommendations: Similar to the tax calculation set up, the Shipping tab interface includes many variables for shipping and shipping cost calculations. Note that at this time the user interface provided through the OFBiz Catalog Manager is limited. This interface is sufficient for creating new shipment methods and estimates. It is recommended that the provided examples be used as templates for any new configurations desired, but that they be deleted and new ones created rather than trying to edit them.

Selection of the Shipping tab brings up the primary shipping options page (Product Store Shipment Settings) for the currently selected OFBiz store. A summary table of all the currently configured shipping methods and estimates is displayed. This display includes the method type (for example, UPS, Ground, Next Day and No Shipping), some basic estimate information (discussed below) and links to delete the estimate for the method from the store (but not the shipment method itself) and links to view the details of each estimate.

4 Expert Recommendation: select the "view" link on one or more existing methods to get a better understanding of how shipping methods and cost estimates are constructed.

From the Product Store Shipment Settings page, there are two main sub-page links:

1.  New Shipment Estimate
2.  New Shipment Method

The New Shipping Estimate link allows the user to apply a new estimate to the store for an existing shipping method. Shipping methods may have one or more estimates associated with them - ...For example, if the default configuration for "Guaranteed Next Day (UPS) should be changed from no surcharge for a specific feature group to a fixed surcharge for a feature group, this is the place to do it.

The New Shipment Method link provides access to the interface for modifying and creating new Shipment Methods Types and Carrier Shipment Methods (where Carrier Shipment Methods are a combination of a Shipment Method Type and a Carrier Party.)

The New Shipment Method page is the best place to start. Here you can create/update Shipment Method Types, Carrier Shipment Methods (a combination of a Shipment Method Type and a Carrier Party), and then at the top of the page you can associate a Carrier Shipment Method with the Store (this is where most of the options are specified).

Once those are ready use the New Shipment Estimate page to enter price information (kind of like price rules) about a specific Carrier Shipment Method associated with this store.

From either of these two pages you can get back to the summary of all of the cost information for these estimates with the View Estimates link.

##### UPS Online Rate Estimates 

This is used during the checkout process to get an estimate from UPS based on the weights of products being ordered.

You must have an account with UPS to be able to use this service.
NOTE that products MUST have values in their Weight and Weight Uom Id fields for ALL products in order for this to work properly.

If you specify an estimated cost along with this, based on whatever criteria just as with normal shipping estimates, those values are added to what comes back from UPS.

This is activated by creating a shipping estimate record in the Catalog Manager with the Service Name of "upsRateEstimate" on the ProductStoreShipmentMeth record in the serviceName field (ie on the **Store Shipment Method** associating a Carrier Shipment Method with this Product Store).

For this to work the CarrierShipmentMethod.carrierServiceCode field must be populated (as it is in the DemoShipping.xml file). Ground is 03, Air is 02, Next Day is 01 for UPS. For others see the UpsServices.java file.

This is configured using various properties in the file:

   ${ofbiz install dir}/applications/product/config/shipment.properties

1.  UPS XPCI Access License Number
    1.  o shipment.ups.access.license.number
    2.  o Example: TEST262223144CAT
    3.  o This license number is used for both the UPS shipment estimate online service and the UPS XPCI shipping interface services (described below)
2.  Shipper Default Pickup Type
    1.  shipment.ups.shipper.pickup.type
    2.  Example: 06
    3.  Valid options:
        1.  01 - Daily Pickup
        2.  03 - Customer Counter
        3.  06 - One Time Pickup
        4.  07 - On Call Air Pickup
        5.  11 - Suggested Retail Rates (UPS Store)
        6.  19 - Letter Center
        7.  20 - Air Service Center
    4.  Choose the option that represents your relationship with UPS. This affects the estimated rate you will get back since UPS varies their prices based on how you get your packages to them.
3.  Estimate split into packages
    1.  shipment.ups.max.estimate.weight
    2.  Example: "90" meaning 90 pounds
    3.  This number is used as the max weight per package when the total weight is > than this weight the weights are split into packages not exceeding max.

##### UPS XPCI Integration 

The UPS XPCI services provide for all interactions between a customer and UPS to register shipments, send weight/size information for each package, get actual prices from UPS, and get images for complete labels to print and affix to each package.

Note that UPS only offers this service to larger customers. The policy may have changed, but last I heard daily pickups must be used and at least 50 packages must be shipped each day (each business day).

These services are integrated with the Shipment code in the Route Segments area and links in the user interface appear when the Carrier Party ID is "UPS".

This is configured using various properties in the file:

   ${ofbiz install dir}/applications/product/config/shipment.properties



1.  UPS Shipper Number
    1.  shipment.ups.shipper.number
    2.  Example: 486915
2.  UPS Bill Shipper Account Number
    1.  shipment.ups.bill.shipper.account.number
    2.  Example: 486915
3.  UPS XPCI Access License Number
    1.  shipment.ups.access.license.number
    2.  Example: TEST262223144CAT
4.  UPS XPCI Access User ID
    1.  shipment.ups.access.user.id
5.  UPS XPCI Access Password
    1.  shipment.ups.access.password
6.  Setting to save files needed for UPS certification
    1.  shipment.ups.save.certification.info=true
    2.  shipment.ups.save.certification.path=/ofbiz/work/ofbiz/upscert
    3.  This option is used to create the artifacts the UPS needs to certify client implementation. It is generally required for each customer to go through this process and for UPS to verify the results. Once this is done the shipment.ups.save.certification.info property should be set to false. For more information on this process, see the UPS XPCI documentation and additional information in the UpsServices.java file.

##### USPS Online Rate Estimates 

This is used during the checkout process to get an estimate from USPS (the United State Postal Service) based on the weights of products being ordered.

You must have an account with USPS to be able to use this service.

NOTE that products MUST have values in their Weight and Weight Uom Id fields for ALL products in order for this to work properly.

If you specify an estimated cost along with this, based on whatever criteria just as with normal shipping estimates, those values are added to what comes back from USPS.
This is activated by creating a shipping estimate record in the Catalog Manager with the Service Name of "uspsRateInquire" on each applicable ProductStoreShipmentMeth record (ie the Shipment Estimate associating a Carrier Shipment Method with this Product Store).

For this to work the CarrierShipmentMethod.carrierServiceCode field must be populated (as it is in the DemoShipping.xml file). Examples include "Priority", "Express", etc.

This is configured using various properties in the file:

   ${ofbiz install dir}/applications/product/config/shipment.properties



1.  USPS Connection URL & timeout in seconds
    1.  shipment.usps.connect.url
    2.  Example: [http://localhost/facility/ShippingAPI.dll](http://localhost/facility/ShippingAPI.dll)
    3.  shipment.usps.connect.timeout
    4.  Example: 60
2.  USPS Credentials
    1.  shipment.usps.access.userid
    2.  shipment.usps.access.password
3.  Estimate split into packages
    1.  shipment.usps.max.estimate.weight
    2.  Example: 70

#### Store Payment Settings 

This page is used to configure the payment processing settings for the various Payment Method Types in OFBiz.

In the demo data you will see configured the test service for all payment methods, including Credit Card, Electronic Funds Transfer (EFT), PayPal, WorldPay, and Gift Cards. It is important to remove all of the "alwaysApprove*" and "test*" service references since those will allow bogus payments to go through.

The only demo configurations that can remain, assuming you want to use them, are the PayPal and WorldPay settings. These don't use configurable services, so the configuration is simpler.

To setup Credit Card (and certain other payment types) processing just specify the services to use for each of the following processes:

1.  Payment Authorization Service
2.  Payment Capture Service
3.  Payment Re-Authorization Service
4.  Payment Refund Service
5.  Payment Release Authorization Service

All service definitions for the payment processing that are included with OFBiz are in the ${ofbiz install dir}/applications/accounting/servicedef directory.

1.  For CyberSource see the service definitions in the services_cybersource.xml file. This includes these services: cyberSourceCCAuth, cyberSourceCCCapture, cyberSourceCCRelease, cyberSourceCCRefund, and cyberSourceCCCredit
2.  For ClearCommerce see the service definitions in the services_clearcommerce.xml file.
3.  For PCCharge see the service definitions in the services_pccharge.xml file.
4.  For RiTA see the service definitions in the services_rita.xml file.
5.  For Verisign PayFlo Pro see the service definitions in the services_verisign.xml file.
6.  For ValueLink (gift cards) see the service definitions in the services_valuelink.xml file.

##### Payment Processor Details 

While the payment services and high level settings are configured in the Store section of the Catalog Manager the detailed configuration for the various payment processing services are configured in the file:

   ${ofbiz install dir}/applications/accounting/config/payment.properties

1.  There are many comments in this file and sections for each of the major payment processing services.
2.  If you are using any credit card payment processor, be sure to check and if necessary change the properties near the beginning of the payment.properties file that follow the pattern: "payment.general.reauth.*.days".

##### PayPal Payment Setup 

1.  Go to Accounting - Payment Gateway Config and select "PayPal Payment Gateway" from the list
2.  Please fill all those fields to made working correctly to work with PayPal:

![](https://cwiki.apache.org/confluence/download/attachments/8192117/PaymentGatewayConfigPayPal1.PNG)

    Business Email : Email address of your business
    Notify URL : PayPal Notify URL (example ([http://yourServerName/ecommerce/control/payPalNotify](http://yourServerName/ecommerce/control/payPalNotify))
    Return URL : PayPal Return URL (example ([http://yourServerName/ecommerce/control/orderhistory](http://yourServerName/ecommerce/control/orderhistory))
    Cancel Return URL : PayPal Return On Cancel URL (example [http://yourServerName/ecommerce/control/payPalCancel/main](http://yourServerName/ecommerce/control/payPalCancel/main))
    Image URL : Image To Use On PayPal (example ([http://yourServerName/images/ofbiz_logo.gif](http://yourServerName/images/ofbiz_logo.gif))
    Confirm Template : Thank-You / Confirm Order Template (example /order/emailconfirmation.ftl)
    Redirect URL : PayPal Redirect URL (Sandbox [http://www.sandbox.paypal.com/us/cgi-bin/webscr](http://www.sandbox.paypal.com/us/cgi-bin/webscr) Production [https://www.paypal.com/cgi-bin/webscr](https://www.paypal.com/cgi-bin/webscr))
    Confirm URL : PayPal Confirm URL (Sandbox [https://www.sandbox.paypal.com/us/cgi-bin/webscr](https://www.sandbox.paypal.com/us/cgi-bin/webscr) Production [http://www.paypal.com/cgi-bin/webscr](http://www.paypal.com/cgi-bin/webscr))

3.  Once PayPal Payment Gateway has been configurated you have to go to Catalog - Stores - select your Store - Payments tab
![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingPayPal1.PNG)

4.  Edit the Payment Method Type Paypal and choose as Payment Gateway Config Id "PayPal Config".
![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingPayPal2.PNG)

5.  As deprecated use you can alternatively change the configuration parameters into
    

 	${ofbiz install dir}/applications/accounting/config/payment.properties

    The ones that always need to be changed for use of PayPal are:

    1.  payment.paypal.business - set to an email address on your PayPal account
    2.  payment.paypal.notify - just change domain name and port to the production values you are using
    3.  payment.paypal.return - set to the URL where you want PayPal to send customers once payment is complete, typically back to your ecommerce web site
    4.  payment.paypal.cancelReturn - set to the URL where you want PayPal to send customers when they cancel their payment
    5.  payment.paypal.image - set to the URL of the image or logo you want PayPal to display to help customers know that the payment is being received on your behalf

The other properties beginning with "payment.paypal." can be set, but unless you know what you are doing we recommending leaving them as-is.

In addition to the settings in the payment.properties file, there is also a setting that you must change on the PayPal web site in your account so that notifications will be sent back to OFBiz to verify payment:
    
	1.  Login to your account at PayPal.com
    2.  Click on the "Profile" link in the header, near the top-right of the page
    3.  In the "Selling Preferences" column click on the "Instance Payment Notification Preferences"
    4.  It will show you the current settings. To chance click on the "Edit" button.
    5.  Check the check box near the top of this page, just under the "Instant Payment Notification (IPN)" heading.
    6.  Enter the notification URL in the text box. This should be the same as the value of the payment.paypal.notify property in the payment.properties file.
    7.  Click on the "Save" button.

##### Payflow Pro Payment Setup 

	1.  Put payflow.jar from Payflow Pro's Java SDK in the directory in

    ${ofbiz install dir}applications/accounting/lib.

	2.  Change the accounting build.xml and comments to not exclude verisign sources like here :
    <!<span style="text-decoration: line-through;">- <exclude name="org/ofbiz/accounting/thirdparty/verisign/**"/> -</span>>
	3.  Confirm that applications/accounting/build/classes/org/ofbiz/accounting/thirdparty/verisign/PayflowPro.class was built and exists
	4.  The installation of certificate is now no more necessary
	5.  Go to Accounting - Payment Gateway Config and select "Payflow Pro Payment Gateway" from the list
6.  Please fill all those fields to made working correctly to work with Payflow Pro:

![](https://cwiki.apache.org/confluence/download/attachments/8192117/PaymentGatewayConfigPayflowPro1.PNG)
	
	Certs Path : Path the the VeriSign Certificate (No more used from version v4)
	Host Address : Address of the payment processor (example (Test [pilot-payflowpro.paypal.com](#) or Production [payflowpro.paypal.com](#))
    Host Port : Port of the payment processor (default is 443)
    Timeout : Timeout (default is 80 seconds)
    Proxy Address : Proxy Address
    Proxy Port : Proxy Port (default is 80)
    Proxy Logon : Proxy Logon
    Proxy Password : Proxy Password
    Vendor : Vendor of account information
    User Id : PayFlow UserID of account information
    Pwd : PayFlow Password of account information
    Partner : PayFlow Partner of account information
    Check Avs : Use Address Verification
    Check Cvv2 : Require CVV2 Verification
    Pre Auth : Pre-Authorize Payments (if set to N will auto-capture)
    Enable Transmit : Set to false to not transmit anything
    Log File Name : Log file name
    Logging Level : Logging level
    Max Log File Size : Max log file size
    Stack Trace On : Stack trace on/off
7.  Once Payflow Pro Payment Gateway has been configurated you have to go to Catalog - Stores - select your Store - Payments tab
![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingPayflowPro1.PNG)

8.  Edit the Payment Method Type Credit Card and after selected a Service Type (Authorize, Capture, ...) you can choose the Custom Method related to the Service Type choosen and as Payment Gateway Config Id "Payflow Pro Config".
![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingPayflowPro2.png)

As deprecated use you can alternatively change the configuration parameters into

>${ofbiz install dir}/applications/accounting/config/payment.properties

Configure all the parameters starting with name "payment.verisign" in payment.properties including directory, vendor, partner, user and password all.

##### CyberSource Payment Setup

1.  Put cybsclients15.jar, cybssecurity.jar and xalan.jar from CyberSource SDK in the directory in
>${ofbiz install dir}applications/accounting/lib/cybersource.
    
2.  Change the accounting build.xml and comments to not exclude verisign sources like here :
    <!<span style="text-decoration: line-through;">- <exclude name="org/ofbiz/accounting/thirdparty/cybersource/**"/> -</span>>
3.  Confirm that applications/accounting/build/classes/org/ofbiz/accounting/thirdparty/cybersource/IcsPaymentServices.class was built and exists
4.  The installation of certificate is requested and you can follow the instructions into the CyberSource Certificate Update manual.
5.  Go to Accounting - Payment Gateway Config and select "CyberSource Payment Gateway" from the list
6.  Please fill all those fields to made working correctly to work with CyberSource:

![](https://cwiki.apache.org/confluence/download/attachments/8192117/PaymentGatewayConfigCyberSource1.PNG)


    Merchant Id : your merchant Id
    CyberSource API version : target API version (now is 1.43)
    Directory of the keys from CyberSource : Generate using online tools
    Name of the keystore : keystore file name (default is "merchantID".p12)
    Log transaction information : log activated true/false (default is true)
    Log directory : Log directory (default is runtime/logs)
    Log File Name : Log file name (default is cybersource.log)
    Max log size : Megabytes allowed for the log file
    Merchant Description : Shown on credit card statement Vendor
    Merchant Description Contact Information : Shown on credit card statement Vendor
    Auto-Bill In Authorization : Capture automatically true/false (default is false)
    Use DAV In Authorization : May not be supported any longer
    Use Fraud Scoring In Authorization : May not be supported any longer
    Ignore AVS results : Ignore Address Verification Service true/false (default is false)
    Disable AVS for Capture : May not be supported any longer
    AVS Decline Codes : May not be supported any longer
7.  Once CyberSource Payment Gateway has been configurated you have to go to Catalog - Stores - select your Store - Payments tab

![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingCyberSource1.PNG)

8.  Edit the Payment Method Type Credit Card and after selected a Service Type (Authorize, Capture, ...) you can choose the Custom Method related to the Service Type choosen and as Payment Gateway Config Id "CyberSource Config".

![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingCyberSource2.PNG)

As deprecated use you can alternatively change the configuration parameters into

>${ofbiz install dir}/applications/accounting/config/payment.properties

Configure all the parameters starting with name "payment.cybersource" in payment.properties including directory, vendor, partner, user and password all.

##### Authorize.net Payment Setup 

1.  The installation of certificate is requested and you can follow also use the instructions from Andreas Sterbenz's blog documented in Google Checkout Integration.
2.  Go to Accounting - Payment Gateway Config and select "Authorize Dot Net Payment Gateway" from the list
3.  Please fill all those fields to made working correctly to work with Authorize.net:
![](https://cwiki.apache.org/confluence/download/attachments/8192117/PaymentGatewayConfigAuthorizeDotNet1.png)


    Transaction URL : Test/Production Transaction Url
    Certificate Alias : Certificate Alias in the Keystore.
    Authorize Dot Net API version : currently 3.1
    Delimited Data : if the authorize.net response should delimited
    Delimited Character : the delimiter to use in the response.
    Method (only CC supported) : credit card processing.
    Email to Customer : if should send an email to the customer for each transaction
    Email to Merchant : if should send email to the merchant for each transaction
    Test Mode : Forces the URL property to the test URL and adds more logging info to the logs
    Relay Response : if should relay the reposnse to a different server
    Transaction Key : Authorizer.net transaction key.
    User Id : Your Authorize.net user id.
    Pwd : Your Authorize.net password.
    Trans Description : Your Transaction Description.
4.  Once Authorize.net Payment Gateway has been configurated you have to go to Catalog - Stores - select your Store - Payments tab
![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingAuthorizeDotNet1.png)
5.  Edit the Payment Method Type Credit Card and after selected a Service Type (Authorize, Capture, ...) you can choose the Custom Method related to the Service Type choosen and as Payment Gateway Config Id "Authorize Dot Net Config".
![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingAuthorizeDotNet2.png)

As deprecated use you can alternatively change the configuration parameters into

   >${ofbiz install dir}/applications/accounting/config/payment.properties

Configure all the parameters starting with name "payment.authorizedotnet" in payment.properties.

##### RBS WorldPay Payment Setup

1.  Go to Accounting - Payment Gateway Config and select "RBS WorldPay Payment Gateway" from the list
2.  Please fill all those fields to made working correctly to work with RBS WorldPay:

![](https://cwiki.apache.org/confluence/download/attachments/8192117/PaymentGatewayConfigRBSWorldPay1.png)

	Redirect URL : Test/Production Redirect Url
    Worldpay Instance Id : Your Worldpay Instance Id.
    Authorization Mode : Full-Authorize / Pre-Authorize.
    Contact details not-editable : Will displace contact info on WorldPay in non-editable format
    Contact details to be hidden : Will hide the contact info completely
    Currency drop-down to be hidden : Will hide the currency info
    Shopper language Id : locale to be used
    Suppressed Language Menu : if should the language menu to be suppressed.
    Delivery Address Editable : if should the delivery address editable.
    Test Mode : Approve/Cancelled/Live Mode.
	
3.  Once RBS WorldPay Payment Gateway has been configurated you have to go to Catalog - Stores - select your Store - Payments tab

![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingRBSWorldPay1.png)
4.  Edit the Payment Method Type Credit Card and after selected a Service Type (Authorize, Capture, ...) you can choose the Custom Method related to the Service Type choosen and as Payment Gateway Config Id "RBS WorldPay Config".

![](https://cwiki.apache.org/confluence/download/attachments/8192117/ProductStorePaymentSettingRBSWorldPay2.png)

As deprecated use you can alternatively change the configuration parameters into	


> ${ofbiz install dir}/applications/accounting/config/payment.properties

Configure all the parameters starting with name "payment.worldpay" in payment.properties.

##### Giftcards Setup 

GiftCard creation:

1.  The giftcard is enabled in the productstore in the catalog as a payment method with several parameters.
2.  The productStore has a field called "Show Checkout Gift Options" this should be set to "Y"
3.  In the entity 'ProductStoreFinActSetting' it can be set if the card requires a pinCode. By default in the demodata this is set to "N"
4.  The giftCard can be bought or reloaded as product in the product catalog.
5.  If a giftcard is purchased a financial account is created for the new giftcard in addition to an invoice and payment and ledger transactions. For this to work you have to activate the 'eca' createFinAccountTrans in accounting/servicedef/secas.xml

Using the Giftcard as payment:

1.  The giftcard code which is listed in the financialAccount
2.  If the card is used with enough balance the Order gets rejected.

#### e-mail Settings 

This page is used to configure the email messages to send for various events in the ecommerce system.

There is a record for each email in the system by default, but if there is an email that you don't want sent you can Delete the corresponding record here.

For those you do want to keep you will want to change the following fields for each email message, one at a time:

1.  2nd field, From Address, to your preferred customer contact email address
2.  4th field, Bcc Address, to any email address you would like to be copied on each email message
3.  The other fields, like the 5th field, the Subject field, can be customized if desired.

If you want to modify any of the templates, we recommend that you copy the templates to your own location, change them there, then change the template locations on this page to point to your files.

#### Survey Settings 

This page is used to configure surveys that are used for various things in ecommerce including random polls that show up on the side bars, special product related surveys to gather additional information about specific products or products in specific categories, surveys associated with the customer profile, and so on.

The demo surveys here can all be removed, though feel free to look at each one to see if it or something like it might be nice to have on your site.

#### General Settings Override 

This page is used to configure product search keyword overrides. These overrides can redirect the user to a specific category, product, or OFBiz or arbitrary URL. For example, when a user searches for the word "gizmo" they are redirected to the Gizmos category (ID 100).

The demo data in place is just an example and should be removed to avoid accidental undesired behavior in product keyword searches on your site.

### Catalog, Category, Product Setup 

#### Catalog Setup 

Rather than reusing existing Catalogs we will create a new one to associate with the Store we have been configuring, and it will be the only one associated with the Store (unless you want to create multiple Catalogs, of course).

To create a new Catalog:

1.  Go to the "Main" in the Catalog Manager and click on the link labeled "Create New Catalog" near the top of the central area of the page.
2.  Enter an ID for the Catalog in the Prod Catalog Id field (this cannot be changed later).
3.  Enter a name for the Catalog in the Catalog name field.
4.  Unless you know you want to use the special Quick Add categories in this Catalog, I recommend setting the Use Quick Add field to N.
5.  The other fields are optional but can be used to customize the look and feel of this Catalog to distinguish it from others (if applicable).
6.  Submit the form with the update button.

Once the new Catalog is created, go to the Stores tab and make sure this Catalog is associated with the Store we just configured.

While here, take a look at the Categories tab. We will soon be creating some Categories to use with this Catalog. There are many types here, but the main ones we will be concerned with are:

1.  Browse Root (One): this category will be the parent category of all of the top level browse categories for the catalog. It will not be visible to the customer, but it's children will be the main or top-level browse categories.
2.  Promotions (One): the products in this category are listed on the default eCommerce Main page. Of course, that page can be customized to show other things, but if you are using the default OFBiz ecommerce templates main page, you should create a Promotions category to configure which products will be displayed there.
3.  Default Search (One): if a Default Search category is configured only the products in this category will show up in product search results. This category can also have Feature Categories and Feature Groups with it, and the Features in those groups will be used to populate the parametric search drop-downs on the Advanced Search page. Of course, when searching within a specific Category only the features associated with that category will be used for the parametric search drop-downs in the Advanced Search page.
4.  Purchase Allow (One): if a Purchase Allow category is configured only the products in that category will be available for purchase when this catalog is active. In that case if a product not in this category is put in the cart an error will be shown to the customer. In general for easier maintenance it is best to have this set to the same category as the Default Search category.
5.  View Allow (One): if a View Allow category is configured only the products in that category will be visible when this catalog is active. Other products will not show up in search results, category browsing, and if someone tries to view the product by ID it will report that no product is found for this ID. There is a performance impact associated with the use of this category, so alternatives might be desirable in certain circumstances. In general for easier maintenance it is best to have this set to the same category as the Default Search category.

#### Category Setup 

As described in the Catalog Setup section there are various basic Categories that we need to create for our new Catalog. We will create four categories:

1.  A Browse Root Category
2.  A top-level browse Category to be a child of the browse root category
3.  A Promotions Category
4.  An "All Products" Category that will be setup as the Default Search, Purchase Allow and View Allow categories for our catalog.

To Create a Category:

1.  Go to the "Main" in the Catalog Manager and click on the link labeled "Create New Category" near the top of the central area of the page.
2.  Enter an ID for the Category in the Product Category ID field (this cannot be changed later).
3.  All of these categories can use the "Catalog" setting for the Product Category Type field.
4.  The other fields can be set, but are not necessary. Note that Category hierarchies do not use the Primary Parent Category field, instead they are done with the Rollup tab once the Category is created.
5.  Submit the form by clicking on the update button.

Once the Category is created go to the Content tab and look near the bottom of the page in the Override Simple Fields section to set a Description, and if desired also a Long Description.

For each of the categories that we are creating, go to the Catalogs tab in the Category section, or the Categories tab in the Catalogs section and associate them using the appropriate type(s) as described above.

For the top-level browse Category that will be a child of the Browse Root Category associate them using the Rollup tab for whichever one you create second. Both parent and child categories can be setup there.

#### Product Setup

Congratulations, you are finally to the point where you can start setting up products....

To create a Product follow a process similar to those described for other things, like Categories.

1.  Go to the main page of the Catalog Manager and click on the "Create New Product" link.
2.  If you fill in an ID it will make sure that ID is valid, and if so it will use that one. If you specify no ID it will generate one.
3.  Set an Internal Name that makes it easy for you to recognize the product. This name will be shown in the admin tools, but not to the customer.
4.  Note that if you are using the UPS or USPS or other online rate estimation utilities then you must have values in the "Weight" and "Weight Uom Id" fields.
5.  Submit the form to create the product.

Add Content to the New Product 

1.  Click on the "Content" tab/button for the product you just created. Here you can setup text and images for your product.
2.  You will see some forms at the top for administering managed content (ie from the Content Manager) with the product. For more advanced product related content needs use this, but for more common and simple needs, this can be more difficult to administer and slower at run time.
3.  Near the bottom of the page is a section labeled "Override Simple Fields". Here you will typically want to specify a Product Name, Product Description, and Long Description. If you have images to associate with the product, you can specify their locations here, or upload them. Note that there are default locations for the images (can be quickly set by clicking on the "[.jpg]" or "[.gif]" buttons). We recommend using these locations, but of course you can put your images anywhere. These can be an absolute URL, or will be relative to the current server address, or the content URL prefix if one is specified in the url.properties file.

Add Prices to the Product 

1.  Product pricing in OFBiz is very flexible. There are two main aspects to it: Prices and Price Rules. This is independent of promotions, which are applied after the price calculation is done.
2.  For basic operation you should have at least one type of price setup for each product: the Default Price. This is the price that is used when no rules apply.
3.  To add a Default Price go to the Prices tab for the Product, and use the form at the bottom of the page.

	1.  The Product Price Type Id should be "Default Price", the Currency Uom Id should be whatever currency the price is in, and the Product Store Group Id can be left as Not Applicable, unless you are setting up multiple groups of stores that have different pricing.
    2.  The From Date can be now or in the future, if you want the price to take effect in the future. The Thru Date is optional, but can be used to specify that this particular price expires at a certain date and time. Note that if there are multiple prices of the same type, etc that are active at once, it will use the one with the most recent From Date. This is useful when you want a temporary price to override the normal "Default" price of the product.
4.  If you are using price rules or may do so in the future you may also want to enter information such as the List Price and the Average Cost which are often used in the price calculations.
5.  Note that if a Minimum Price is set the price will never be less than that. So, even if the Default Price is to 2.00 and the Minimum Price is set to 3.00, then 3.00 will be used as the calculated price. The Maximum Price setting works the same way as the ceiling for the price.

Make sure to put each product in a browse category, and in the All Products category so that it can be searched for, viewed, and purchased in your catalog.

Also, if you want to know "[How to localize Product and Categories descriptions](/confluence/display/OFBIZ/How+to+localize+Product+and+Categories+descriptions)"

Expert Recommendation: These are the basics, but there is a lot more information about products that you can, or may need to, setup. We recommend reviewing the more detailed documentation or engaging the services of an experienced consulting to help you through this.

Advanced Catalog Setup: Features, Promotions, Price Rules, Keyword Thesaurus, Features for special functionality or parametric search, Moderated (or unmoderated) Product Reviews, Configurable and Manufactured Products, Virtual and Variant Products, Inventory/Facility/Location settings, and so on

See the end-user documentation space for details on how to set these things up and what they mean. Also see this for more advanced options for Products, Categories, and so on.

### Accounting data organization and Setup 

(field/entitynames in brackets[])

#### General principles

1.  The general ledger of ofbiz consists out of a list of 'ledger buckets = glAccounts' with a non meaningfull ID: [glAccountId] and a meaningfull code [accountCode] and a meaningfull name [accountName] Initially, in the demo data, the account id and code are the same. When reorganizations are required these codes can be easily renamed without changing the glAccountId.
2.  The buckets are in a hierarchy where totals of the lower levels are added together and be shown at the higher levels, therefore every ledger bucket has a parent [parentGlAccountId]; with one exeption if the glaccount is a toplevel glAccount/bucket.
3.  Every glAccount has a account type id [glAccountTypeId] with a organization dependent second default glAccountId [GlAccountTypeDefault.glAccountId] to be able for the system to create the double booking. (Currently the system will do that always to "ACCOUNTS_RECEIVABLE" default glAccountTypeId for sales invoices).
4.  Transactions are created for several reasons like posting of invoices or payments, inventory movements and workeffort costs.
5.  GlAccount class is used for categorization and reporting.

#### General Setup (accounting -> global GlSettings)

1.  Company data and internal organizations
    demo file at: /applications/accounting/data/DemoOrganizationData.xml
2.  All glAccounts are predefined [GlAccount] and can be viewed on the globalGlSettings->chartOfAccounts screen.
    demo file at /applications/accounting/data/DemoGeneralChartOfAccounts.xml
3.  Load the Sales/purchase InvoiceItemType table and default glAccountId general setup for all organizations.
    demo file at /applications/accounting/data/DemoGlSetupData.xml

#### Organizational Setup (accounting -> organizational settings -> setup).

1.  The predefined glAccounts are assigned to an organization [GlAccountOrganization] on screen chartOfAccounts (this file can only be loaded and not changed) demo file at 
	>/applications/accounting/data/DemoGlSetupData.xml
2.  if required override the invoiceItem type type assignement for a particular organization at the 
	>glAccountDefaults->SalesInvoice/PurchaseInvoice
3.  Enter/load the payment TYPE GlType Mapping file [PaymentGlAccountTypeMap] at
	>glAccountDefaults->PaymentTypeGlMapping
4.  Enter/load the payment METHOD GlType Mapping file [PaymentMethodTypeGlAccount] at
	>glAccountDefaults->PaymentMethodTypeGlMapping

#### Creating ledger transactions.(to be completed)

1.  Sales invoice
2.  Purchase invoice
3.  Incoming payment
4.  Outgoing payment
5.  Inventary adjustment
6.  Workeffort costs

### Marketing overview

text now maintained within ofbiz, [check](http://demo-trunk-ofbiz.apache.org/cmssite/cms/APACHE_OFBIZ_HTML#TheMarketingApplication)