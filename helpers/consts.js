const dummyGameData = {
    team: {
      name: 'ΑΕΚ',
      nameShort: 'AEK',
      photo: './assets/img/aek.png'
    },
    teamStats: {
        highlightPhoto: './assets/img/highlight.jpg',
        gameIntro: 
          `Η ΑΕΚ κέρδισε εύκολα τον Ιωνικό στην πρεμιέρα του πρωταθλήματος με 3-0, με σούπερ εικόνα επιθετικά στο δεύτερο ημίχρονο και 
          ζητήματα στην άμυνα στο πρώτο.
          Στο μικροσκόπιο του enwsi.gr, οι 16 κιτρινόμαυροι που έπαιξαν στο ματς`
        ,
        home: true,
        system: '4-5-1',
        stats: {
            goals: [24, 56, 77],
            possession: 44,
            shots: [25, 17],
            passes: [212, 180],
            touches: 478,
            tackles: 12,
            clearances: 5,
            corners: 4,
            offsides: 2,
            yellow: [25, 48, 52, 54, 95],
            red: [95],
            fouls: 18
        }
    },
    opponent: {
        name: 'Ιωνικός',
        nameShort: 'ION',
        photo: './assets/img/ionikos.png'
    },
    opponentStats: {
        goals: [],
        red: [33]
    },
    coach: {
      name: 'Βλάνταν Μιλόγεβιτς',
      photo: './assets/img/milojevic.png'
    },
    coachStats: {
        rate: 7,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`
    },
    mvp: 11,
    subs: [
      {
        name: 'Νορντίν Άμραμπατ',
        photo: './assets/img/amrabat.png',
        number: 55,
        position: 'mid',
        positionShort: 'amr',
        rate: 5,
        subbed: 67,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          yellow: 88,
          passes: [25, 24],
          shots: [1, 1],
          fouls: 3,
          headers: [4, 3],
          crosses: [1, 0]
        }
      },
      {
        name: 'Καρίμ Ανσαριφάρντ',
        photo: './assets/img/ansarifard.png',
        number: 14,
        position: 'att',
        positionShort: 'st',
        rate: 6,
        subbed: 55,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          passes: [12, 10],
          headers: [2, 1],
          crosses: [1, 1]
        }
      },
    ],
    players: [
      {
        name: 'Τσίτσαν Στάνκοβιτς',
        photo: './assets/img/stankovic.png',
        number: 1,
        position: 'gk',
        positionSpecific: 'Goalkeeper',
        positionShort: 'GK',
        rate: 8,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          saves: 3,
          penSaves: 1,
          catches: 2,
          highClaims: 1,
          punches: 1
        }
      },
      {
        name: 'Clement Μισελέν',
        photo: './assets/img/michelin.png2',
        number: 2,
        position: 'def',
        positionSpecific: 'Right Defender',
        positionShort: 'rb',
        rate: 6,
        comment: `Κάκιστο ματς. Είχε πολλά προβλήματα στο ανασταλτικό κομμάτι, απέναντι στον Μπίσεσβαρ. 
        Και στην φάση του γκολ , έπρεπε να πάει πάνω στον αντίπαλο του και όχι να τον μαρκάρει από μακριά. 
        Ενώ τον χάνει και πάλι στην φάση του πέναλτι και τον ανατρέπει. Μια φορά βγήκε μπροστά κανονικά και η σέντρα του ήταν για κλάματα.`,
        stats: {
          yellow: 52,
          passes: [18, 14],
          shots: [1, 1],
          tackles: [3, 1],
          fouls: 6,
          crosses: [3, 0]
        }
      },
      {
        name: 'Ognes Vranjes',
        // photo: './assets/img/vranjes.png',
        number: 5,
        position: 'def',
        positionSpecific: 'Center back',
        positionShort: 'cb',
        rate: 9,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          yellow: 25,
          red: 95,
          passes: [25, 24],
          shots: [1, 1],
          tackles: [7, 7],
          fouls: 3,
          headers: [4, 3],
          dribbles: [0, 0]
        }
      },
      {
        name: 'Γιώργος Τζαβέλλας',
        photo: './assets/img/tzavellas.png',
        number: 4,
        position: 'def',
        positionSpecific: 'Center back',
        positionShort: 'lcb',
        rate: 8,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          passes: [46, 34],
          shots: [2, 1],
          tackles: [4, 3],
          fouls: 5,
          headers: [7, 5]
        }
      },
      {
        name: 'Εχμάν Χατζισαφί',
        photo: './assets/img/hajsafi.png',
        number: 3,
        position: 'def',
        positionSpecific: 'Left defender',
        positionShort: 'lb',
        rate: 8,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          passes: [32, 30],
          shots: [2, 0],
          tackles: [3, 2],
          fouls: 2,
          headers: [4, 3],
          crosses: [2, 2]
        }
      },
      {
        name: 'Αντρές Σιμόες',
        photo: './assets/img/simoes.png',
        number: 6,
        position: 'mid',
        positionSpecific: 'Defensive Midfielder',
        positionShort: 'rdm',
        rate: 8,
        subbed: 67,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          passes: [28, 22],
          shots: [3, 2],
          tackles: [4, 3],
          fouls: 6,
          headers: [2, 2],
          dribbles: [1, 0]
        }
      },
      {
        name: 'Νταμιάν Σιμάνσκι',
        photo: './assets/img/simanski.png',
        number: 8,
        position: 'mid',
        positionSpecific: 'Defensive Midfielder',
        positionShort: 'ldm',
        rate: 7,
        subbed: 70,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          passes: [33, 21],
          shots: [2, 2],
          tackles: [1, 1],
          fouls: 3,
          headers: [2, 2],
          dribbles: [1, 0]
        }
      },
      {
        name: 'Πέτρος Μάνταλος',
        photo: './assets/img/mantalos.png',
        number: 20,
        position: 'mid',
        positionSpecific: 'Attacking Midfielder',
        positionShort: 'amc',
        rate: 8,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          goals: [77],
          passes: [38, 29],
          shots: [3, 1],
          fouls: 3,
          headers: [2, 2],
          dribbles: [1, 0],
          crosses: [3, 2]
        }
      },
      {
        name: 'Λιβάι Γκαρσία',
        photo: './assets/img/livaigarcia.png',
        number: 9,
        position: 'mid',
        positionSpecific: 'Left Attacking Midfielder',
        positionShort: 'aml',
        rate: 7,
        subbed: 55,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          yellow: 48,
          passes: [15, 12],
          shots: [2, 2],
          fouls: 2,
          dribbles: [8, 7],
          crosses: [3, 1],
          assists: [24]
        }
      },
      {
        name: 'Στίβεν Τσούμπερ',
        photo: './assets/img/zuber.png',
        number: 14,
        position: 'mid',
        positionSpecific: 'Right Attacking Midfielder',
        positionShort: 'amr',
        rate: 9,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          passes: [27, 22],
          shots: [3, 2],
          dribbles: [5, 3],
          crosses: [6, 4],
          assists: [55, 56]
        }
      },
      {
        name: 'Σέρχιο Αραούχο',
        photo: './assets/img/araujo.png',
        number: 11,
        position: 'att',
        positionSpecific: 'Striker',
        positionShort: 'st',
        rate: 10,
        comment: `The feat took years of work, and the result is spectacularly detailed. 
          The focal point is Tycho Crater, one of the most prominent impressions on the Moon. 
          And even though it was taken from hundreds of thousands of kilometers away, the picture makes you feel as 
          though you are flying right over the surface of Earth's only natural satellite.`,
        stats: {
          yellow: 54,
          passes: [17, 11],
          shots: [6, 4],
          tackles: [1, 1],
          fouls: 2,
          headers: [3, 2],
          dribbles: [3, 2],
          goals: [24, 56],
          assists: [55],
          ownGoals: [87]
        }
      }
    ]
}

module.exports = {
    expireTime: 2 * (60 * 60 * 1000),
    dummyGameData
};