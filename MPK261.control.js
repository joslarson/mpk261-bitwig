loadAPI(1);

/* Script Initilization */

load("MPK2_common.js");
load("MPK2_PadInstrument.js");
load("MPK2_PadClipLaunch.js");
load("MPK2_PadSceneLaunch.js");


host.defineController("Akai", "MPK261", "1.0.4", "27400730-da60-11e3-9c1a-0800200c9a66");
host.defineMidiPorts(2, 2);

if (host.platformIsWindows()) {
    host.addDeviceNameBasedDiscoveryPair(["MPK261","MIDIIN4 (MPK261)"], ["MPK261","MIDIOUT4 (MPK261)"]);
}

else if (host.platformIsMac())  {
    host.addDeviceNameBasedDiscoveryPair(["MPK261 Port A","MPK261 Remote"], ["MPK261 Port A","MPK261 Remote"]);
}
else {
    host.addDeviceNameBasedDiscoveryPair(["MPK261 MIDI 1","MPK261 MIDI 4"], ["MPK261 MIDI 1","MPK261 MIDI 4"]);
}

/* MPK261 MIDI Product ID */
const PRODUCT_ID = 0x25;

function init()
{

    initClipArray();
    PadNotes = host.getMidiInPort(0).createNoteInput("MPK261 Pads", "89????", "99????");
    PadNotes.setKeyTranslationTable(PadMIDITable.ON);
    PadNotes.setShouldConsumeEvents(false);

    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH01)", "80????", "90????", "B001??", "B040??", "D0????", "E0????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH02)", "81????", "91????", "B101??", "B040??", "D1????", "E1????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH03)", "82????", "92????", "B201??", "B040??", "D2????", "E2????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH04)", "83????", "93????", "B301??", "B040??", "D3????", "E3????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH05)", "84????", "94????", "B401??", "B040??", "D4????", "E4????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH06)", "85????", "95????", "B501??", "B040??", "D5????", "E5????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH07)", "86????", "96????", "B601??", "B040??", "D6????", "E6????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH08)", "87????", "97????", "B701??", "B040??", "D7????", "E7????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH09)", "88????", "98????", "B801??", "B040??", "D8????", "E8????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH11)", "8A????", "9A????", "BA01??", "B040??", "DA????", "EA????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH12)", "8B????", "9B????", "BB01??", "B040??", "DB????", "EB????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH13)", "8C????", "9C????", "BC01??", "B040??", "DC????", "EC????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH14)", "8D????", "9D????", "BD01??", "B040??", "DD????", "ED????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH15)", "8E????", "9E????", "BE01??", "B040??", "DE????", "EE????");
    host.getMidiInPort(0).createNoteInput("MPK261 Keyboard (CH16)", "8F????", "9F????", "BF01??", "B040??", "DF????", "EF????");
    host.getMidiInPort(0).setMidiCallback(onMidi);

    
    setActivePadMode(PadInstrument);
    
	transport = host.createTransportSection();
	application = host.createApplicationSection();
    trackBank = host.createMainTrackBankSection(8, 2, 16);
    sceneLaunchTrackBank = host.createTrackBank(4,0,64);

	cursorTrack = host.createCursorTrack(2, 0);
	cursorDevice = host.createCursorDevice();

    primaryDevice = cursorTrack.getPrimaryDevice();
    primaryDevice.addNameObserver(11, "", cursorTrackInstrumentNameObs());

    cursorTrack.addColorObserver(cursorTrackColorObs());
    cursorTrack.addPitchNamesObserver(cursorTrackpitchObs());
    
    
    trackBank.getClipLauncherScenes().addNameObserver(sceneLaunchObs());

	for (var p = 0; p < 8; p++)
	{
		var macro = primaryDevice.getMacro(p).getAmount();
		var parameter = cursorDevice.getParameter(p);
		var track = trackBank.getTrack(p);
        
        track.getArm().addValueObserver(armObsFunction(p));
        track.getMute().addValueObserver(muteObsFunction(p));
        track.getSolo().addValueObserver(soloObsFunction(p));
        
        macro.setIndication(true);
		parameter.setIndication(true);
		parameter.setLabel("P" + (p + 1));
		track.getVolume().setIndication(true);
		track.getPan().setIndication(true);
		track.getSend(0).setIndication(true);
		track.getSend(1).setIndication(true);
        
        var clipLauncherSlots = track.getClipLauncherSlots();
        clipLauncherSlots.addIsPlayingObserver(clipPlayingObs(p));
        clipLauncherSlots.addHasContentObserver(clipContentObs(p));
        clipLauncherSlots.addIsRecordingObserver(clipRecordObs(p));
        clipLauncherSlots.setIndication(true);
    }
    println("Akai Profressional MPK261 Bitwig Controller Script");
}
