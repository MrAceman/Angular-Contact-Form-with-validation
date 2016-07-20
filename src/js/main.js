import angular from 'angular';

import {FormController} from './controllers/form.controller';
import {serverConstant} from './constants/server.constant.js';

angular
  .module('app', [])
  .controller('FormController', FormController)
  .constant('SERVER', serverConstant);
