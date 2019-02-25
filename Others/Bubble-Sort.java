
## BUBBLESORT

public class BubbleSort {

	public static void main(String[] args) {
		
		int[] array = {6, 1, 4, 8, 7, 3, 8, 9};
		for (int i = 0; i < array.length - 1; i++)  {
			for (int j = 0; j < array .length - 1; j++) {
				if (array[j] > array[j+1]) {
					int temp = array[j]; 
                    array[j] = array[j+1]; 
                    array[j+1] = temp; 
				}
			}
		}
		for (int i = 0; i < array.length; i++) {
			System.out.print(array[i] + " ");
		}
	}

}
