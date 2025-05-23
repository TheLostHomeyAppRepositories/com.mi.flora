import MiFloraDriver from '../../lib/MiFloraDriver';

class MiFloraSensorDriver extends MiFloraDriver {

  getMiFloraBleIdentification() {
    return 'Flower care';
  }

  getMiFloraBleName() {
    return 'Mi flora flower care';
  }

  getDefaultSettings() {
    return {
      measure_temperature_min: 16,
      measure_temperature_max: 25,
      measure_nutrition_min: 300,
      measure_nutrition_max: 1000,
      measure_moisture_min: 15,
      measure_moisture_max: 30,
      measure_luminance_min: 1000,
      measure_luminance_max: 2000,
    };
  }

  getSupportedCapabilities() {
    return [
      'measure_temperature',
      'measure_luminance',
      'measure_nutrition',
      'measure_moisture',
      'measure_battery',
      'alarm_temperature',
      'alarm_luminance',
      'alarm_nutrition',
      'alarm_moisture',
    ];
  }

}

module.exports = MiFloraSensorDriver;
