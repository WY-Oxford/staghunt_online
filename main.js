/************* 
 * Main *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'main';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  import * as visual from 'psychopy/visual';
  import * as core from 'psychopy/core';
  import * as event from 'psychopy/event';
  import * as gui from 'psychopy/gui';
  import * as keyboard from 'psychopy/hardware/keyboard';
  import * as os from 'os';
  import * as traceback from 'traceback';
  import {makemaze} from 'MakeMaze';
  import {STAG_task} from 'STAGHUNT_exp';
  function escfunc() {
      os._exit(0);
  }
  function get_monitor_settings(display_choice) {
      /* Return monitor settings based on the display choice. */
      var monitors;
      monitors = {"Internal(Full)": ["AppleInternalMonitor", [2240, 1260], true], "Internal(Small)": ["AppleInternalMonitor", [800, 600], false], "DELL U2713HM": ["DELL U2713HM", [2560, 1440], true], "fMRI monitor": ["fMRI", [1920, 1200], true], "Prj1": ["Prj1", [800, 600], true]};
      return monitors.get(display_choice, ["AppleInternalMonitor", [800, 600], false]);
  }
  function key_test(win, instText, player_label) {
      /* Conduct a response button test for a player. */
      var key, keys, testkey;
      instText.text = `Response button test for Player ${player_label}`;
      instText.color = ((player_label === "A") ? "cyan" : "lime");
      instText.draw();
      psychoJS.window.flip();
      core.wait(1);
      while (true) {
          keys = [];
          for (var direction, _pj_c = 0, _pj_a = ["LEFT", "UP", "RIGHT", "DOWN"], _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
              direction = _pj_a[_pj_c];
              instText.text = `Please press a button for "${direction}"`;
              instText.draw();
              psychoJS.window.flip();
              key = psychoJS.eventManager.waitKeys();
              keys.push(key[0]);
          }
          instText.text = "If everything is OK, please press \"UP\" button";
          instText.draw();
          psychoJS.window.flip();
          testkey = psychoJS.eventManager.waitKeys()[0];
          if ((testkey === keys[1])) {
              break;
          }
      }
      return ((testkey === keys[1]) ? keys : null);
  }
  function main() {
      var MAZENAME, NAME, Ngame, Nses, Ntrial, RT_LIMIT, TYPE, Vhare, Vstag, deffont, display, fMRIsig, instText, keysA, keysB, myDlg, param, scr_full, win, winname, winsize;
      psychoJS.eventManager.globalKeys.add({"key": "escape", "func": escfunc});
      deffont = "Helvetica";
      try {
          myDlg = new gui.Dlg({"title": "Experimental Parameters"});
          myDlg.addField("Subject initials:", "TS");
          myDlg.addField("Maze name:", "MAZE_original");
          myDlg.addField("Task type: Behaviour(1), fMRI(2):", 1, {"choices": [1, 2]});
          myDlg.addField("Response time:", 2.5, {"choices": [2, 2.5, 3]});
          myDlg.addField("Display:", {"choices": ["Internal(Small)", "Internal(Full)", "DELL U2713HM", "fMRI monitor", "Prj1"]});
          myDlg.addField("Session number:", "1");
          myDlg.addField("Number of games:", "1");
          myDlg.addField("Number of trials:", "15");
          myDlg.addField("Stag points:", "20");
          myDlg.addField("Hare points:", "10");
          param = myDlg.show();
          if ((! param)) {
              return;
          }
          [NAME, MAZENAME, TYPE, RT_LIMIT, display, Nses, Ngame, Ntrial, Vstag, Vhare] = [param[0].toString(), param[1].toString(), Number.parseInt(param[2]), Number.parseInt(param[3]), param[4].toString(), Number.parseInt(param[5]), Number.parseInt(param[6]), Number.parseInt(param[7]), Number.parseInt(param[8]), Number.parseInt(param[9])];
          [winname, winsize, scr_full] = get_monitor_settings(display);
          win = new visual.Window({"size": winsize, "color": "black", "units": "pix", "fullscr": scr_full, "winType": "pyglet"});
          new psychoJS.eventManager.Mouse({"visible": false, "win": psychoJS.window});
          instText = new visual.TextStim(psychoJS.window, {"font": deffont, "color": "white", "pos": [0, 0], "anchorHoriz": "center", "wrapWidth": (psychoJS.window.size[0] - 40)});
          keysA = key_test(psychoJS.window, instText, "A");
          if ((keysA === null)) {
              return;
          }
          keysB = keysA;
          instText.text = "Please wait ...";
          instText.color = "white";
          instText.draw();
          psychoJS.window.flip();
          core.wait(1);
          if ((TYPE === 1)) {
              fMRIsig = [];
          } else {
              if ((TYPE === 2)) {
                  fMRIsig = "5";
              }
          }
          instText.text = `Session ${Nses}`;
          instText.draw();
          psychoJS.window.flip();
          core.wait(1);
          new STAG_task(NAME, MAZENAME, psychoJS.window, keysA, keysB, Nses, Ngame, Ntrial, Vstag, Vhare, instText, RT_LIMIT, fMRIsig);
          instText.text = "The end of session";
          instText.draw();
          psychoJS.window.flip();
          core.wait(2);
      } catch(e) {
          traceback.print_exc();
      } finally {
          new psychoJS.eventManager.Mouse({"visible": true, "win": psychoJS.window});
          psychoJS.window.close();
          core.quit();
      }
  }
  if ((__name__ === "__main__")) {
      main();
  }
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
