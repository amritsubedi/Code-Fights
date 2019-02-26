/*

(Count single digits) Write a program that generates 100 random integers between 0 and 9 
and displays the count for each number. 

*/

import java.util.HashMap;

public class CountSingleDigits {
	
	public static void main(String[] args) {
		
		HashMap<Integer, Integer> hashmap = new HashMap<Integer, Integer>();
		
		int[] array = new int[100];
		
		for (int i = 0; i < array.length; i++) {
			array[i] = (int) (Math.random() * 10);
		}
		
		for (int i = 0; i < array.length; i++) {
			if (hashmap.containsKey(array[i])) {
				hashmap.put(array[i], hashmap.get(array[i]) + 1);
			} else {
				hashmap.put(array[i], 1);
			}
		}
		
		hashmap.forEach((key, value) -> System.out.println(key + " occurs " + value + " times."));
	}

}
