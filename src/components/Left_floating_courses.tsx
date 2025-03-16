import { Button, Card, Typography } from "@mui/material";

export interface PROPS {
  name: string;
  description: string;
  levels: string[];
  teacher: string;
  key: number;
}

export default function LeftFloatingCourses({
  levels,
  name,
  description,
  teacher,
}: PROPS) {
  return (
    <Card className="w-64 h-full p-4 shadow-lg rounded-lg  top-[80px] bg-white  flex flex-col gap-4">
      <Typography variant="h6" className="text-lg font-bold">
        {name}
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        {description}
      </Typography>
    
      <Typography variant="body1" className="font-medium">
        Instructor: {teacher}
      </Typography>
      <Typography variant="body1" className="font-medium">
        Levels:
      </Typography>
      <div className="flex flex-wrap gap-2">
        {levels.map((item, index) => (
          <Button key={index} variant="contained" size="small">
            {item}
          </Button>
        ))}
        <Button color="primary" variant="contained" className="w-full"><a href="/contact">Aloqaga Chiqish</a></Button>
        <Button color="primary" variant="contained" className="w-full"><a href="/test">O'zingizni sinang</a></Button>
      </div>
    </Card>
  );
}