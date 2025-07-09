"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string | string[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="list-disc list-inside space-y-1 mt-2">
          {description.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-sm text-muted-foreground mt-2">{description}</p>;
  };

  return (
    <Card className="flex">
      <div
        className="flex items-center w-full p-4 cursor-pointer group"
        onClick={handleClick}
      >
        
        <div className="flex-shrink-0">
          <Avatar className="border size-12 bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>

   
        <div className="flex-1 ml-4 min-w-0">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm text-foreground">
                  {title}
                </h3>
                {badges && badges.length > 0 && (
                  <div className="flex gap-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 text-muted-foreground transition-all duration-200 ease-out opacity-0 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </div>
              {subtitle && (
                <p className="text-sm text-muted-foreground mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="text-sm text-muted-foreground flex-shrink-0 ml-4">
              {period}
            </div>
          </div>

          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <div className="pt-3 text-sm text-muted-foreground">
                {renderDescription()}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Card>
  );
};