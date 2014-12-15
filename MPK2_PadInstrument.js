PadInstrument = new PadMode();

PadInstrument.handleMIDI = function(data1,data2) {
    
}

PadInstrument.handleNavKeys = function (data1) {
    if (data1 == NAVKeys.LEFT) {
        shifted ? cursorTrack.selectPrevious() : cursorDevice.selectPrevious();
    }
    
    else if (data1 == NAVKeys.RIGHT) {
        shifted ? cursorTrack.selectNext() : cursorDevice.selectNext();
    }
    else if (data1 == NAVKeys.UP) {
        shifted ? cursorDevice.switchToNextPreset() : cursorDevice.nextParameterPage();
        
    }
    else if (data1 == NAVKeys.DOWN) {
        shifted ? cursorDevice.switchToPreviousPreset() : cursorDevice.previousParameterPage() ;
    }
}

PadInstrument.init = function() {
    if (displayHelpText) {
        host.showPopupNotification("Pads: Instrument/Drum Rack Mode");
    }

    usingDrumMachine ? PadInstrument.lightPadsForDrumRack(CursorTrackColor) : lightAllPads(CursorTrackColor,"Off");
    PadNotes.setKeyTranslationTable(PadMIDITable.ON);    
}

PadInstrument.cursorTrackColorObs = function(red,green,blue) {
    PadMode.prototype.cursorTrackColorObs(red,green,blue);

    if (usingDrumMachine) {
        PadInstrument.lightPadsForDrumRack (CursorTrackColor);
    }
    
    else {
        lightAllPads(CursorTrackColor,"Off");
    }
}


PadInstrument.cursorTrackInstrumentNameObs = function(track,text) {
    PadMode.prototype.cursorTrackInstrumentNameObs(track,text);
    usingDrumMachine ? PadInstrument.lightPadsForDrumRack(CursorTrackColor) : lightAllPads(CursorTrackColor,"Off");
}

PadInstrument.lightPadsForDrumRack = function(color) {
    padIdent = minimumPadOff;
    var MidiOut = "F0 47 00 " + uint7ToHex(PRODUCT_ID) + " 31 00 43 40 " + uint7ToHex(getMSB(padIdent)) + " " + uint7ToHex(getLSB(padIdent));
    for (var x = 36; x < 100; x++ ) {
        if (drumKeys[x] == false) {
            MidiOut+= " " + uint7ToHex(padColors['Off']);
        }
        else {
            MidiOut+= " " + uint7ToHex(color);
        }
    }
    MidiOut+= " F7";
    host.getMidiOutPort(1).sendSysex(MidiOut);
}

PadInstrument.cursorTrackpitchObs = function(key,name) {
    PadMode.prototype.cursorTrackpitchObs(key,name);
    PadInstrument.lightPadsForDrumRack(CursorTrackColor)
}