interface PersonResponse {
    firstName: string;
    lastName: string;
    scaleResults: ScaleResult[];
}

interface ScaleResult {
    date: string;
    weight: number;
    percentageMuscles: number;
    percentageFat: number;
    bmi: number;
}
