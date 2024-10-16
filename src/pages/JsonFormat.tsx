import { useState } from 'react';
import { CopyButton, CopyButtonWithText } from '@/components/ui/copy-button';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const spaceList = [
  { value: '1', text: '1 spaces' },
  { value: '2', text: '2 spaces' },
  { value: '3', text: '3 spaces' },
  { value: '4', text: '4 spaces' },
  { value: '5', text: '5 spaces' },
  { value: '6', text: '6 spaces' },
];

function JsonFormat() {
  const [jsonInput, setJsonInput] = useState('');
  const [outputText, setOutputText] = useState('');
  const [formatSpace, setFormatSpace] = useState(2);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, formatSpace);
      setOutputText(formatted);
    } catch (err: any) {
      setOutputText(`${err.name}\n${err.message}`);
    }
  };

  const handleInputChange = (e: any) => {
    setJsonInput(e.target.value);
  };

  const handleOnPaste = () => {
    navigator.clipboard.readText().then((cliptext) => setJsonInput(cliptext));
  };

  const handleGetSample = () => {
    const sample = {
      glossary: {
        title: 'example glossary',
        GlossDiv: {
          title: 'S',
          GlossList: {
            GlossEntry: {
              ID: 'SGML',
              SortAs: 'SGML',
              GlossTerm: 'Standard Generalized Markup Language',
              Acronym: 'SGML',
              Abbrev: 'ISO 8879:1986',
              GlossDef: {
                para: 'A meta-markup language, used to create markup languages such as DocBook.',
                GlossSeeAlso: ['GML', 'XML'],
              },
              GlossSee: 'markup',
            },
          },
        },
      },
    };
    setJsonInput(JSON.stringify(sample));
  };

  const handleSpaceChange = (val: string) => {
    setFormatSpace(Number(val));
  };

  return (
    <div className="flex min-h-screen flex-row gap-2 p-4">
      <div className="flex h-[calc(100vh-10rem)] w-full flex-col border-r-2 pr-2">
        <div className="flex items-center gap-2">
          Input:
          <Button variant="outline" onClick={handleOnPaste}>
            Clipboard
          </Button>
          <Button variant="outline" onClick={() => handleGetSample()}>
            Sample
          </Button>
          <Button variant="outline" onClick={() => setJsonInput('')}>
            Clear
          </Button>
          <Button variant="outline" onClick={() => formatJson()}>
            Format
          </Button>
        </div>
        <Textarea
          value={jsonInput}
          onChange={handleInputChange}
          className="mt-2 h-full bg-white"
          placeholder="Enter your JSON here..."
        />
      </div>
      <div className="flex h-[calc(100vh-10rem)] w-full flex-col">
        <div className="flex justify-between">
          Output:
          <div className="flex flex-row items-center gap-2">
            <Select defaultValue={String(formatSpace)} onValueChange={(val) => handleSpaceChange(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select spaces" />
              </SelectTrigger>
              <SelectContent>
                {spaceList.map(({ text, value }, index) => (
                  <SelectItem key={index} value={value}>
                    {text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <CopyButtonWithText value={outputText} />
          </div>
        </div>
        <pre className="mt-2 h-full w-full whitespace-pre-wrap rounded-md bg-white p-2">{outputText}</pre>
      </div>
    </div>
  );
}

export default JsonFormat;
