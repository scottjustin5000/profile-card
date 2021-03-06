import React, {Fragment} from 'react'

import { ProfileCard } from 'profile-card'

const stats = {
  columns: ['S', 'T', 'GP', 'AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SO', 'SB', 'CS', 'AVG', 'OBP', 'SLG', 'OPS'],
  rows: [{
    s: 2020,
    t: 'SD',
    gp: 180,
    ab: 223,
    r: 123,
    h: 444,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    s: 2021,
    t: 'SD',
    gp: 180,
    ab: 223,
    r: 123,
    h: 444,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }]
}

const splits = {
  columns: ['SPLT','AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SO', 'SB', 'CS', 'AVG', 'OBP', 'SLG', 'OPS'],
  rows:[{
    splt: 'vs Left',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'vs Right',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Home',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Away',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 0-0',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 0-1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 0-2',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 1-0',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 1-1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 1-2',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  },{
    splt: 'Cnt 2-0',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 2-1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 2-2',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 3-0',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 3-1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 3-2',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }]
}

const gameLogs = {
  columns: ['SUM','AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SO', 'SB', 'CS', 'AVG', 'OBP', 'SLG', 'OPS'],
  rows:[{
    sum: '06/03/2021, NYM 3 @ SD 4',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '06/01/2021, SD 3 @ CHC 4',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/31/2021, SD 2 @ CHC 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/30/2021, SD 4 @ HOU 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/29/2021, SD 11 @ HOU 8',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/28/2021, SD 10 @ HOU 3',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/27/2021, SD 5 @ MIL 6',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/26/2021, SD 2 @ MIL 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/25/2021, SD 7 @ MIL 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/24/2021, SD 3 @ MIL 5',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  },{
    sum: '05/23/2021, SEA 2 @ SD 9',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/22/2021, SEA 4 @ SD 6',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/21/2021, SEA 1 @ SD 16',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/19/2021, COL 0 @ SD 3',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/09/2021, SD 11 @ SF 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/08/2021, SD 1 @ SF 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }]
}

const gameLogs_v = {
  columns: ['SUM','AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SO', 'SB', 'CS', 'AVG', 'OBP', 'SLG', 'OPS'],
  rows:[{
    sum: '06/03/2021, NYM 3 @ BOS 4',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '06/01/2021, BOS 3 @ CHC 4',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/31/2021, BOS 2 @ CHC 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/30/2021, BOS 4 @ HOU 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/29/2021, BOS 11 @ HOU 8',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/28/2021, BOS 10 @ HOU 3',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/27/2021, BOS 5 @ MIL 6',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/26/2021, BOS 2 @ MIL 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/25/2021, BOS 7 @ MIL 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/24/2021, BOS 3 @ MIL 5',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  },{
    sum: '05/23/2021, SEA 2 @ BOS 9',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/22/2021, SEA 4 @ BOS 6',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/21/2021, SEA 1 @ BOS 16',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/19/2021, COL 0 @ BOS 3',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/09/2021, BOS 11 @ SF 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/08/2021, BOS 9 @ SF 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }]
}

const verdugo= {
  firstName: 'Alex',
  lastName: 'Verdugo',
  position: 'Center Field',
  positionAbbrev: 'CF',
  number: '99',
  headShot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33786.png',
  teamLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bos.png',
  summary: 'Alexander Brady Verdugo is an outfielder for the Boston Red Sox. The Los Angeles Dodgers selected Verdugo in the second round of the 2014 MLB draft. He made his MLB debut with the Dodgers in 2017.',
  details:  [{
    key: 'height',
    value: 6
  }, {
    key: 'weight',
    value: 195
  }, {
    key: 'position',
    value: 'CF'
  }, {
    key: 'number',
    value: 99
  },{
    key: 'dob',
    value: '05/05/1996'
  }, {
    key: 'hits',
    value: 'L'
  }, {
    key: 'throws',
    value: 'L'
  }]
}
const player = {
  firstName: 'Fernando',
  lastName: 'Tatis Jr.',
  position: 'Short Stop',
  positionAbbrev: 'SS',
  number: '23',
  headShot:'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35983.png',
  teamLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sd.png',
  summary: 'Fernando Gabriel Tat??s Medina Jr., nicknamed "El Ni??o" and Bebo, is a shortstop for the San Diego Padres. He made his MLB debut in 2019, and won the Silver Slugger Award in 2020.',
  details:  [{
    key: 'height',
    value: `6'3`,
  }, {
    key: 'weight',
    value: 217
  }, {
    key: 'position',
    value: 'SS'
  }, {
    key: 'number',
    value: 23
  },{
    key: 'dob',
    value: '01/02/1999'
  }, {
    key: 'hits',
    value: 'R'
  }, {
    key: 'throws',
    value: 'R'
  }]
}
const tabData = [{
  label: 'Stats',
  data: stats
}, {
  label: 'Splits',
  data: splits
}, {
  label: 'Game Logs',
  data: gameLogs
}]

const tabData2 = [{
  label: 'Stats',
  data: stats
}, {
  label: 'Splits',
  data: splits
}, {
  label: 'Game Logs',
  data: gameLogs_v
}]


const App = () => {
  return (
    <Fragment>
<div style={{
  display: 'flex',
  margin: '2em',
  padding: '0.5em',
  border: '2px',
  fontSize: '2em',
  textAlign: 'center'
}}>
  <ProfileCard player={player} tabData={tabData} size='large'>

  </ProfileCard>

  <ProfileCard player={verdugo} tabData={tabData2} size='large'>

</ProfileCard>
</div>
<div style={{
  display: 'flex',
  margin: '2em',
  padding: '0.5em',
  border: '2px',
  fontSize: '2em',
  textAlign: 'center'
}}>
  <ProfileCard player={player} tabData={tabData} size='small'>

  </ProfileCard>

  <ProfileCard player={verdugo} tabData={tabData2} size='small'>

</ProfileCard>
</div>
</Fragment>
  )
}

export default App
