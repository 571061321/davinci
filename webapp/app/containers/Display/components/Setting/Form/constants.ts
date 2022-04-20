/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import slide from 'assets/json/slideSettings/slide.json'
import chart from 'assets/json/slideSettings/chart.json'
import rectangle from 'assets/json/slideSettings/rectangle.json'
import label from 'assets/json/slideSettings/label.json'
import video from 'assets/json/slideSettings/video.json'
import timer from 'assets/json/slideSettings/timer.json'
import decoration3 from 'assets/json/slideSettings/decoration3.json'

export enum SecondaryGraphTypes {
  Rectangle = 20,
  Label = 21,
  Video = 22,
  Timer = 23,
  Decoration = 24
}

export enum GraphTypes {
  Slide,
  Chart,
  Secondary
}

export const slideSettings = {
  [GraphTypes.Slide]: slide,
  [GraphTypes.Chart]: chart,
  [SecondaryGraphTypes.Rectangle]: rectangle,
  [SecondaryGraphTypes.Label]: label,
  [SecondaryGraphTypes.Video]: video,
  [SecondaryGraphTypes.Timer]: timer,
  [SecondaryGraphTypes.Decoration]: decoration3,
}
