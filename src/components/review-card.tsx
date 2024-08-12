import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function ReviewCard({ comment, name, rating, urlImage }: ReviewCardProps) {
    const totalStars = 5

    return (
        <Card className="w-[400px] h-fit shadow-[0_0px_30px_rgba(0,0,0,1)]">
            <CardHeader className="flex">
                <Avatar>
                    <AvatarImage src={urlImage} />
                    <AvatarFallback></AvatarFallback>
                </Avatar>

                <CardTitle className="flex gap-3 items-center">{name}</CardTitle>
                <CardDescription>Cliente</CardDescription>
            </CardHeader>

            <CardContent>{comment}</CardContent>

            <CardFooter className="flex gap-2">
                {[...Array(totalStars)].map((_, index) => (
                    <Star
                        key={`star-${index}-${rating}`}
                        className={`${rating > index ? "fill-yellow-400" : "fill-none"} text-yellow-400`}
                    />
                ))}
            </CardFooter>
        </Card>
    )
}


type ReviewCardProps = {
    name: string,
    rating: number,
    comment: string,
    urlImage: string
}
