import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { Ellipsis } from 'lucide-react';

const menuList = [
  {
    href: '/json-format',
    label: 'JSON Formatter/Validator',
    icon: '123',
  },
];

interface MenuProps {
  isOpen: boolean | undefined;
}

function SideMenu({ isOpen }: MenuProps) {
  const pathname = useLocation().pathname;

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ href, label, icon: Icon }, index) => (
            <li className={cn('w-full')} key={index}>
              <Link to={href}>
                <span className={cn(isOpen === false ? '' : 'mr-4')}>{/* <Icon size={18} /> */}</span>
                <p
                  className={cn(
                    'max-w-[200px] truncate',
                    isOpen === false ? '-translate-x-96 opacity-0' : 'translate-x-0 opacity-100'
                  )}
                >
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}

export default SideMenu;
