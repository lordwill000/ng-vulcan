import { Component, OnInit } from '@angular/core'
import { AppService } from '../../providers/app.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  myParams: object = {}
  width: number = 100
  height: number = 100
  socialData: any

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.myParams = {
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: '$colorHead'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 7
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.2,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '$colorHead',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          bounce: true,
          speed: 4,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true,
          onresize: {
            enable: true,
            density_auto: true,
            density_area: 400
          }
        },
        modes: {
          grab: {
            distance: 300,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 5,
            speed: 3
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: '#b61924',
        background_image: '',
        background_position: '50% 50%',
        background_repeat: 'no-repeat',
        background_size: 'cover'
      }
    }

    this.appService.fetchData('socials').subscribe(
      data => {
        this.socialData = data
        console.log(this.socialData)
      },
      error => console.log(error)
    )
  }
}
