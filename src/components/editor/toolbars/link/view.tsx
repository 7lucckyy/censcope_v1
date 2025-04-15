import { Button } from "@/components/ui/button";

interface LinkViewProps {
  url: string;
  onEdit?: () => void;
  onRemove?: () => void;
}

const LinkView = ({ url, onEdit, onRemove }: LinkViewProps) => {
  return (
    <div className="relative flex w-[400px] px-3 py-2.5">
      <Button variant="ghost" size="icon" onClick={onEdit}>
        Edit link
      </Button>
      <Button variant="ghost" onClick={onEdit}>
        Edit link
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open in new tab"
        onClick={() => window.open(url, "_blank")}
      >
        ExtLinkIcon
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Remove link"
        onClick={onRemove}
      >
        Unlink
      </Button>
    </div>
    //   </PopoverContent>
    // </Popover>
  );
};

export default LinkView;
