# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  plugins:
    stylus:
      stylusLibraries:
        'nib': true
        'jeet': true
        'rupture': true
      stylusOptions:
        compress: false
}

# Export the DocPad Configuration
module.exports = docpadConfig
