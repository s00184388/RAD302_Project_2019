﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentAssAttSys.Core.Core
{
    public class Lecturer : User
    {
        public virtual List<Module> Modules { get; set; }
    }
}
