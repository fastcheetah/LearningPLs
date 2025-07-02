**Arduino Ide Project**
I have no idea about how to write c on the arduino ide 
What I have to do Write code that will calculate temperature of the room"
What I have done : Asked chatgpt for areas of C I need to know and asked for a prompt Ill paste the code below I cant even check whether or not it works till I head to school and check the arduino board or idek im the only person in my group willing to work so ig I gotta do what I gotta do and I still have to make slides so im oofed
ILL check back tomorrow but this is the code
// Room Temperature Monitor using DHT22 sensor
// Required library: DHT sensor library by Adafruit

#include <DHT.h>

// Pin definitions
#define DHT_PIN 2        // Digital pin connected to DHT sensor
#define DHT_TYPE DHT22   // DHT22 (AM2302) sensor type

// Initialize DHT sensor
DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  // Initialize serial communication
  Serial.begin(9600);
  Serial.println("Room Temperature Monitor Starting...");
  
  // Initialize DHT sensor
  dht.begin();
  
  delay(2000); // Wait for sensor to stabilize
}

void loop() {
  // Read temperature and humidity
  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();        // Celsius
  float tempF = dht.readTemperature(true);    // Fahrenheit
  
  // Check if readings are valid
  if (isnan(humidity) || isnan(tempC) || isnan(tempF)) {
    Serial.println("Failed to read from DHT sensor!");
    delay(2000);
    return;
  }
  
  // Calculate heat index (feels like temperature)
  float heatIndexC = dht.computeHeatIndex(tempC, humidity, false);
  float heatIndexF = dht.computeHeatIndex(tempF, humidity);
  
  // Display results
  Serial.println("=== Room Temperature Reading ===");
  Serial.print("Temperature: ");
  Serial.print(tempC);
  Serial.print("°C / ");
  Serial.print(tempF);
  Serial.println("°F");
  
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  
  Serial.print("Heat Index: ");
  Serial.print(heatIndexC);
  Serial.print("°C / ");
  Serial.print(heatIndexF);
  Serial.println("°F");
  
  Serial.println("--------------------------------");
  
  // Wait 5 seconds before next reading
  delay(5000);
}

// Alternative function for simple temperature reading
float getRoomTemperature() {
  float temp = dht.readTemperature();
  
  if (isnan(temp)) {
    Serial.println("Sensor error!");
    return -999; // Error value
  }
  
  return temp;
}

// Function to check if room is comfortable
void checkComfortLevel(float temp, float humidity) {
  Serial.print("Comfort Level: ");
  
  if (temp >= 20 && temp <= 26 && humidity >= 40 && humidity <= 60) {
    Serial.println("COMFORTABLE");
  } else if (temp < 18) {
    Serial.println("TOO COLD");
  } else if (temp > 28) {
    Serial.println("TOO HOT");
  } else if (humidity < 30) {
    Serial.println("TOO DRY");
  } else if (humidity > 70) {
    Serial.println("TOO HUMID");
  } else {
    Serial.println("MODERATE");
  }
}
