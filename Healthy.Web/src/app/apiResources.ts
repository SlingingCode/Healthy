interface PersonResponse {
    id: number;
    firstName: string;
    lastName: string;
    scaleResults: ScaleResult[];
    imageUrl: string;
    isPublic: boolean;
    motto: string;
  }

  interface ScaleResult {
    // date: string;
    date: Date;
    weight: number;
    percentageMuscles: number;
    percentageFat: number;
    bmi: number;
}
