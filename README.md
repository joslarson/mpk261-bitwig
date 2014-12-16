Custom Akai MPK261 Bitwig Controller Script
===========================================

This script is based on the official script by Akai ([available here](http://www.akaipro.com/product/mpk-261#downloads)) which I have customized for my own needs.

Change Log
----------
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

### DAW Control Cursors:

<kbd>MIDDLE</kbd> = <kbd>SHIFT</kbd>

<kbd>UP/DOWN</kbd> Device Control Bank shift

<kbd>SHIFT</kbd> + <kbd>UP/DOWN</kbd> Cycle preset for focused device

<kbd>LEFT/RIGHT</kbd> Focus device left/right

<kbd>SHIFT</kbd> + <kbd>LEFT/RIGHT</kbd> Focus track left/right

### Control Surface Functions

#### Bank A

K1 - K8
Device Macros

F1 - F8
Focused Device Control

S1 - Instrument/Drum Rack Modes
S2 - Clip Launch: 1-4
S3 - Clip Launch: 5-8
S4 - Scene Launch 1-64
S5 - N/F
S6 - N/F
S7 - N/F
S8 - Pop-up notification toggle


#### Bank B

K1 - K8
Track Pan

F1 - F8
Track Level

S1 - S8
Track Record Ready

S1 - S8 (SHIFT)
Track Select

#### Bank C
K1 - K8
Send A Level

F1 - F8
Send B Level

S1 - S8
Track Mute

S1 - S8 (SHIFT)
Track Solo
