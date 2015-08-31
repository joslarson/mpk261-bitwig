Custom Akai MPK261 Bitwig Controller Script
===========================================

This script is based on the official script by Akai [available here](http://www.akaipro.com/product/mpk-261#downloads).

Change log / differences from original script
----------------------------------------
- **Fixed:** Added Sustain pedal support (the glaring bug that got me looking into customizing the script)
- **Added:** <kbd>SHIFT</kbd> + <kbd>PLAY</kbd> toggles metronome
- **Added:** <kbd>SHIFT</kbd> + <kbd>REC</kbd> toggles clip launcher overdub mode

Control Setup
-------------

### Pad Modes

**Instrument/Drum Rack**

- If triggering Drum Machine, pads will receive LED feedback to indicate which pads include samples. Otherwise, the pads will function as normal and send notes starting at 36 

**Clip Launch**

- Emulates APC behavior for Bitwig's Clip Launch on the hardware pads

**Scene Launch**

- Pads 1-64 trigger Scenes 1-64, relatively.

### DAW Control Cursors

<kbd>MIDDLE</kbd> is <kbd>SHIFT</kbd>

<kbd>UP/DOWN</kbd> Device Control Bank shift

<kbd>SHIFT</kbd> + <kbd>UP/DOWN</kbd> Cycle preset for focused device

<kbd>LEFT/RIGHT</kbd> Focus device left/right

<kbd>SHIFT</kbd> + <kbd>LEFT/RIGHT</kbd> Focus track left/right

### Control Surface Functions


**Bank A**

<kbd>K1 - K8</kbd>
Device Macros

<kbd>F1 - F8</kbd> Focused Device Control

<kbd>S1</kbd> Instrument/Drum Rack Modes

<kbd>S2</kbd> Clip Launch: 1-4

<kbd>S3</kbd> Clip Launch: 5-8

<kbd>S4</kbd> Scene Launch 1-64

<kbd>S5</kbd> N/F

<kbd>S6</kbd> N/F

<kbd>S7</kbd> N/F

<kbd>S8</kbd> Pop-up notification toggle


**Bank B**

<kbd>K1 - K8</kbd> Track Pan

<kbd>F1 - F8</kbd> Track Level

<kbd>S1 - S8</kbd> Track Record Ready

<kbd>SHIFT</kbd> + <kbd>S1 - S8</kbd> Track Select


**Bank C**

<kbd>K1 - K8</kbd> Send A Level

<kbd>F1 - F8</kbd> Send B Level

<kbd>S1 - S8</kbd> Track Mute

<kbd>SHIFT</kbd> + <kbd>S1 - S8</kbd> Track Solo
