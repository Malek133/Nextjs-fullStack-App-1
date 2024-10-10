import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function DetailProduct() {
  return (
    <Card className="w-[400px] h-[500px] overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-[280px] w-full">
          <Image
            src="https://i.pinimg.com/564x/1a/63/2d/1a632d2b39f3275752f2c4b3c73477a3.jpg"
            alt="Product image"
             layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Product Title</h2>
          <span className="text-lg font-bold text-green-600">$99.99</span>
        </div>
        <p className="text-sm text-gray-600">
          This is a brief description of the product. It highlights key features and benefits to entice potential buyers.
          It highlights key features and benefits to entice potential buyers.
          It highlights key features and benefits to entice potential buyers.
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}