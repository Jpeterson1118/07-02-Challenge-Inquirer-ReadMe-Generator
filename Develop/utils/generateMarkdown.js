// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return ''
  }
  else{
    switch(license){
      case  "Apache 2.0 License":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0);"
      case "Boost Software License 1.0":
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      case "BSD 3-Clause License":
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      case "BSD 2-Clause License":
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
      case "CC0":
        return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
      case "Attribution 4.0 International":
        return "[[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
      case "Attribution-ShareAlike 4.0 International":
        return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"
      case "Attribution-NonCommercial 4.0 International":
        return "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)"
      case "Attribution-NoDerivates 4.0 International":
        return "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)"
      case "Attribution-NonCommmercial-ShareAlike 4.0 International":
        return "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)"
      case "Attribution-NonCommercial-NoDerivatives 4.0 International":
        return "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)"
      case "Eclipse Public License 1.0":
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      case "GNU GPL v3":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      case "GNU GPL v2":
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      case "GNU AGPL v3":
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
      case "GNU LGPL v3":
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
      case "GNU FDL v1.3":
        return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)"
      case "The Hippocratic License 2.1":
        return "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
      case "The Hippocratic License 3.0":
        return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
      case "IBM Public License Version 1.0":
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      case "ISC License (ISC)":
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      case "The MIT License":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      case "Mozilla Public License 2.0":
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      case "Attribution License (BY)":
        return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
      case "Open Database License (ODbL)":
        return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
      case "Public Domain Dedication and License (PDDL)":
        return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"
      case "The Perl License":
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      case "The Artistic License 2.0":
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      case "SIL Open Font License 1.1":
        return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
      case "The Unlicense":
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      case "The Do What the Fuck You Want to Public License":
        return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
      case "The zlib/libpng License":
        return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
    }
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ''
  }
  else{
    switch(license){
      case  "Apache 2.0 License":
        return "https://www.apache.org/licenses/LICENSE-2.0"
      case "Boost Software License 1.0":
        return "https://www.boost.org/users/license.html"
      case "BSD 3-Clause License":
        return
      case "BSD 2-Clause License":
        return
      case "CC0":
        return
      case "Attribution 4.0 International":
        return
      case "Attribution-ShareAlike 4.0 International":
        return
      case "Attribution-NonCommercial 4.0 International":
        return
      case "Attribution-NoDerivates 4.0 International":
        return
      case "Attribution-NonCommmercial-ShareAlike 4.0 International":
        return
      case "Attribution-NonCommercial-NoDerivatives 4.0 International":
        return
      case "Eclipse Public License 1.0":
        return
      case "GNU GPL v3":
        return
      case "GNU GPL v2":
        return
      case "GNU AGPL v3":
        return
      case "GNU LGPL v3":
        return
      case "GNU FDL v1.3":
        return
      case "The Hippocratic License 2.1":
        return
      case "The Hippocratic License 3.0":
        return
      case "IBM Public License Version 1.0":
        return
      case "ISC License (ISC)":
        return
      case "The MIT License":
        return
      case "Mozilla Public License 2.0":
        return
      case "Attribution License (BY)":
        return
      case "Open Database License (ODbL)":
        return
      case "Public Domain Dedication and License (PDDL)":
        return
      case "The Perl License":
        return
      case "The Artistic License 2.0":
        return
      case "SIL Open Font License 1.1":
        return
      case "The Unlicense":
        return
      case "The Do What the Fuck You Want to Public License":
        return
      case "The zlib/libpng License":
        return
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ''
  }
  else{
    switch(license){
      case  "Apache 2.0 License":
        return `Copyright [yyyy] [name of copyright owner]

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`
      case "Boost Software License 1.0":
        return `Permission is hereby granted, free of charge, to any person or organization
        obtaining a copy of the software and accompanying documentation covered by
        this license (the "Software") to use, reproduce, display, distribute,
        execute, and transmit the Software, and to prepare derivative works of the
        Software, and to permit third-parties to whom the Software is furnished to
        do so, all subject to the following:

        The copyright notices in the Software and this entire statement, including
        the above license grant, this restriction and the following disclaimer,
        must be included in all copies of the Software, in whole or in part, andall derivative works of the Software, unless such copies or derivative
        works are solely in the form of machine-executable object code generated by
        a source language processor.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
        SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
        FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.`
      case "BSD 3-Clause License":
        return
      case "BSD 2-Clause License":
        return
      case "CC0":
        return
      case "Attribution 4.0 International":
        return
      case "Attribution-ShareAlike 4.0 International":
        return
      case "Attribution-NonCommercial 4.0 International":
        return
      case "Attribution-NoDerivates 4.0 International":
        return
      case "Attribution-NonCommmercial-ShareAlike 4.0 International":
        return
      case "Attribution-NonCommercial-NoDerivatives 4.0 International":
        return
      case "Eclipse Public License 1.0":
        return
      case "GNU GPL v3":
        return
      case "GNU GPL v2":
        return
      case "GNU AGPL v3":
        return
      case "GNU LGPL v3":
        return
      case "GNU FDL v1.3":
        return
      case "The Hippocratic License 2.1":
        return
      case "The Hippocratic License 3.0":
        return
      case "IBM Public License Version 1.0":
        return
      case "ISC License (ISC)":
        return
      case "The MIT License":
        return
      case "Mozilla Public License 2.0":
        return
      case "Attribution License (BY)":
        return
      case "Open Database License (ODbL)":
        return
      case "Public Domain Dedication and License (PDDL)":
        return
      case "The Perl License":
        return
      case "The Artistic License 2.0":
        return
      case "SIL Open Font License 1.1":
        return
      case "The Unlicense":
        return
      case "The Do What the Fuck You Want to Public License":
        return
      case "The zlib/libpng License":
        return
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
