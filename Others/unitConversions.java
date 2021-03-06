/*
Basic Unit Conversions.
*/

import java.util.function.DoubleFunction;
import java.util.Scanner;
class Conversion {
  
  static int pick;
  
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);   
    print();
    pick = input.nextInt();
    while(pick!=0){
      if (pick < 0 || pick > 6) {
        System.out.println("Enter a valid number from 0-6.");
      }
      
      else if (pick == 1) {
      	System.out.println("Enter pounds: ");
      	double pounds = input.nextDouble();
      	PoundsToKg(pounds);
      }
      
      else if (pick==2) {
        System.out.println("Enter Kgs: ");
        double kg = input.nextDouble();
        KgToPounds(kg);
      }
      
      else if (pick == 3) {
        System.out.println("Enter feet: ");
        double feet = input.nextDouble();
        FeetToMeters(feet);
      }
      
      else if (pick == 4) {
        System.out.println("Enter meters: ");
        double meters = input.nextDouble();
        MetersToFeet(meters);
      }
      
      else if (pick == 5) {
        System.out.println("Enter temperature in Celsius: ");
        double celsius = input.nextDouble();
        CelsiusToFahrenheit(celsius);
      }
      
      else if (pick == 6) {
        System.out.println("Enter temperature in Fahrenheit: ");
        double fahrenheit = input.nextDouble();
        FahrenheitToCelsius(fahrenheit);
      }
            
      print();
      pick = input.nextInt();
    }
    
    
  }
  
  public static void print(){
    System.out.println("Pick Conversion");
    System.out.println("(1) Pounds to Kilogram");
    System.out.println("(2) Kilograms to Pounds");
    System.out.println("(3) Feet to Meters");
    System.out.println("(4) Meters to Feet");
    System.out.println("(5) Celsius to Fahrenheit");
    System.out.println("(6) Fahrenheit to Celsius");   
    System.out.println("(0) Exit the program");
  }
  
  public static void PoundsToKg(double pounds){
    double kg = pounds / 2.2;
    System.out.println(pounds + " pounds is " + kg + " kgs.");
  } 
    
  public static void KgToPounds(double kg){
    double pound = kg * 2.2;
    System.out.println(kg + " kgs is " + pound + " pounds.");
  }

  public static void FeetToMeters(double feet){
    double meters = feet * 0.3048;
    System.out.println(feet + " feet is " + meters + " meters.");    	
  }

  public static void MetersToFeet(double meters){
    double feet = meters / 0.3048;
    System.out.println(meters + " meters is " + feet + " feet.");    	    	
  }

  public static void CelsiusToFahrenheit(double celsius){
    double fahrenheit = celsius * 1.8 + 32;
    System.out.println(celsius + " degrees Celsius is " + fahrenheit + " degrees farenhiet.");    	    	    	
  }

  public static void FahrenheitToCelsius(double fahrenheit){
    double celsius = (fahrenheit - 32) / 1.8;
    System.out.println(fahrenheit + " degree Fahrenheit is " + celsius + " degrees Celsius.");    	    	    
  }

}
