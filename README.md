## Here i created some unit tests for simple functions

##### I used the most popular js testing framework _**Mocha**_ and library _**Chai**_. I used the expect style


###### Table of used chainable getters i used to  improve the readability of my assertions

chainable getters | explanation
------------ | -------------
equal | Asserts that the target is strictly (===) equal to the given __*val*__.
true | Asserts that the target is strictly (===) equal to __*true*__.
false | Asserts that the target is strictly (===) equal to __*false*__.
undefined | Asserts that the target is strictly (===) equal to __*undefined*__.
null | Asserts that the target is strictly (===) equal to __*null*__.
NaN | Asserts that the target is exactly __*NaN*__.
a/an | Asserts that the target’s type is equal to the given __*string type*__.
deep | Causes all _.equal_, _.include_, _.members_, _.keys_, and _.property_ assertions that follow in the chain to use deep equality instead of strict (===) equality.