import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl  } from "@codesandbox/sandpack-themes";

interface Props {
  className: string;
  dependencies?: Record<string, string> | undefined;
  componentCode: string;
}

export default function ReactSandpack({ className, dependencies, componentCode }: Props) {
  return(
    <div className={className}>
      <Sandpack 
        template="react"
        theme={nightOwl}
        options={{
          externalResources: ["https://cdn.tailwindcss.com"]
        }}
        customSetup={{
          dependencies,
        }}
        files={{
          "App.js": componentCode
        }}
      />
    </div>
    
  )
}