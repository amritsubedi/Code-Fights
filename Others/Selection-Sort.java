import java.util.Arrays;

public class SelectionSort {

	public static void main(String[] args) {
		
		int[] array = {9, 7, 1, 6, 3, 5, 8, 4, 6, 2};
		
		for (int i = 0; i < array.length ; i++) {
			int min = array[i];
			int minIndex = i;
			
			for (int j = i+1; j < array.length; j++) {
				if (min > array[j]) {
					min = array[j];
					minIndex = j;
				}
			}	
			
			// Swap minimum and first unsorted element.
			int temp = array[i];
			array[i] = array[minIndex];
			array[minIndex] = temp;
			
			System.out.print(array[i] + " ");
		}	

	}

}
