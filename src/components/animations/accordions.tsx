import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/core/accordion";
import { cn } from "@/lib/utils";
import { IQuestions } from "@/types/profile";
import { ChevronRight } from "lucide-react";

export function AccordionVariant({
  questions,
  locale,
}: {
  questions: IQuestions[] | undefined;
  locale: string;
}) {
  return (
    <Accordion className="flex w-full flex-col">
      {questions?.map((question, index) => {
        const data = question?.translations?.find(
          (translation) => translation.languageCode === locale
        );

        if (!data) return null;
        return (
          <AccordionItem key={index} value={data.question} className="py-2 ">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center">
                <ChevronRight className="h-6 w-6 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 " />
                <div
                  className={cn(
                    "ml-2 text-primary text-[18px] xl:text-[20px]",
                    locale === "en" ? "font-geom" : "font-firago"
                  )}
                >
                  {data.question}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-6 pr-2 text-primary/70">
              {data.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export function AccordionBasic({
  questions,
  locale,
}: {
  questions: IQuestions[] | undefined;
  locale: string;
}) {
  return (
    <Accordion className="flex w-full flex-col divide-y divide-primary/25 py-[16px]">
      {questions?.map((question, index) => {
        const data = question?.translations?.find(
          (translation) => translation.languageCode === locale
        );

        if (!data) return null;
        return (
          <AccordionItem key={index} value={data.question}>
            <AccordionTrigger
              className={cn(
                "w-full py-0.5 text-left text-primary text-[18px] xl:text-[20px]",
                locale === "en" ? "font-geom" : "font-firago"
              )}
            >
              {data?.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-primary/70 mb-3">{data?.answer}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
