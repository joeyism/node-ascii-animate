# Ascii Animation

A library that animates ASCII characters

### Install

To install, run

    > npm install --save ascii-animation

Then require it as

    var animation = require('ascii-animation');

### Methods

**animate**

The main method that animates. To use, run the code as

    animation.animate([array with each frame],
                      [will loop this condition until it is false],
                      [callback])


**secondsPerFrame**

Sets the seconds to wait between each frame

    animation.secondsPerFrame(0.5);

**usecondsPerFrame**

Sets the microseconds to wait between frame

    animation.usecondsPerFrame(100000);

**updateCondition**

Updates the condition

    animation.updateCondition(false);

### Example

For an example, please see [dancing bear](https://github.com/joeyism/node-dancing-bear)

### Version
**1.0.4**
* Fixed sleep dependency

**1.0.3**
* Fixed require colors bug

**1.0.2**
* Fixed bug that didn't allow on windows

**1.0.0**
* First release
