const work = [
    {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  }
]

const play = [
    {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  }
]

const study = [
    {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  }
]

const exercise = [
    {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  }
]

const social = [
    {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  }
]

const selfcare = [
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const active = $(".activehours"),
      previous = $(".previoushours"),
      imgs = $(".containerimgs")

$(".lower-btn").click(añadir)

function check(contenido) {

  const data = [
    work[0].timeframes[contenido],
    play[0].timeframes[contenido],
    study[0].timeframes[contenido],
    exercise[0].timeframes[contenido],
    social[0].timeframes[contenido],
    selfcare[0].timeframes[contenido]
  ];
  data.forEach((d, i) => {
    active.eq(i).text(d.current+"hrs");
    previous.eq(i).text("Last Week - "+d.previous + " hrs");
  });

}

function añadir() {
  var content = this.innerHTML;
  check(content.toLowerCase());
  
}

