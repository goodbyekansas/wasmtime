(function() {var implementors = {};
implementors["cranelift_codegen"] = [{"text":"impl Copy for Reloc","synthetic":false,"types":[]},{"text":"impl Copy for CursorPosition","synthetic":false,"types":[]},{"text":"impl Copy for AtomicRmwOp","synthetic":false,"types":[]},{"text":"impl Copy for ValueDef","synthetic":false,"types":[]},{"text":"impl Copy for Block","synthetic":false,"types":[]},{"text":"impl Copy for Value","synthetic":false,"types":[]},{"text":"impl Copy for Inst","synthetic":false,"types":[]},{"text":"impl Copy for StackSlot","synthetic":false,"types":[]},{"text":"impl Copy for GlobalValue","synthetic":false,"types":[]},{"text":"impl Copy for Constant","synthetic":false,"types":[]},{"text":"impl Copy for Immediate","synthetic":false,"types":[]},{"text":"impl Copy for JumpTable","synthetic":false,"types":[]},{"text":"impl Copy for FuncRef","synthetic":false,"types":[]},{"text":"impl Copy for SigRef","synthetic":false,"types":[]},{"text":"impl Copy for Heap","synthetic":false,"types":[]},{"text":"impl Copy for Table","synthetic":false,"types":[]},{"text":"impl Copy for AnyEntity","synthetic":false,"types":[]},{"text":"impl Copy for AbiParam","synthetic":false,"types":[]},{"text":"impl Copy for ArgumentExtension","synthetic":false,"types":[]},{"text":"impl Copy for ArgumentPurpose","synthetic":false,"types":[]},{"text":"impl Copy for Imm64","synthetic":false,"types":[]},{"text":"impl Copy for Uimm64","synthetic":false,"types":[]},{"text":"impl Copy for Uimm32","synthetic":false,"types":[]},{"text":"impl Copy for V128Imm","synthetic":false,"types":[]},{"text":"impl Copy for Offset32","synthetic":false,"types":[]},{"text":"impl Copy for Ieee32","synthetic":false,"types":[]},{"text":"impl Copy for Ieee64","synthetic":false,"types":[]},{"text":"impl Copy for InstructionFormat","synthetic":false,"types":[]},{"text":"impl Copy for Opcode","synthetic":false,"types":[]},{"text":"impl Copy for OpcodeConstraints","synthetic":false,"types":[]},{"text":"impl Copy for ValueTypeSet","synthetic":false,"types":[]},{"text":"impl Copy for ResolvedConstraint","synthetic":false,"types":[]},{"text":"impl Copy for LibCall","synthetic":false,"types":[]},{"text":"impl Copy for Endianness","synthetic":false,"types":[]},{"text":"impl Copy for MemFlags","synthetic":false,"types":[]},{"text":"impl Copy for ProgramPoint","synthetic":false,"types":[]},{"text":"impl Copy for ExpandedProgramPoint","synthetic":false,"types":[]},{"text":"impl Copy for SourceLoc","synthetic":false,"types":[]},{"text":"impl Copy for StackSlotKind","synthetic":false,"types":[]},{"text":"impl Copy for StackLayoutInfo","synthetic":false,"types":[]},{"text":"impl Copy for TrapCode","synthetic":false,"types":[]},{"text":"impl Copy for Type","synthetic":false,"types":[]},{"text":"impl Copy for ValueLoc","synthetic":false,"types":[]},{"text":"impl Copy for ArgumentLoc","synthetic":false,"types":[]},{"text":"impl Copy for ValueLabel","synthetic":false,"types":[]},{"text":"impl Copy for CallConv","synthetic":false,"types":[]},{"text":"impl Copy for ConstraintKind","synthetic":false,"types":[]},{"text":"impl Copy for BranchRange","synthetic":false,"types":[]},{"text":"impl Copy for Encoding","synthetic":false,"types":[]},{"text":"impl Copy for RegClassIndex","synthetic":false,"types":[]},{"text":"impl Copy for StackRef","synthetic":false,"types":[]},{"text":"impl Copy for StackBase","synthetic":false,"types":[]},{"text":"impl Copy for StackBaseMask","synthetic":false,"types":[]},{"text":"impl Copy for LookupError","synthetic":false,"types":[]},{"text":"impl Copy for TargetFrontendConfig","synthetic":false,"types":[]},{"text":"impl Copy for Loop","synthetic":false,"types":[]},{"text":"impl Copy for NonRegInput","synthetic":false,"types":[]},{"text":"impl Copy for RelocDistance","synthetic":false,"types":[]},{"text":"impl Copy for VCodeConstant","synthetic":false,"types":[]},{"text":"impl Copy for LoweredBlock","synthetic":false,"types":[]},{"text":"impl Copy for ABIArg","synthetic":false,"types":[]},{"text":"impl Copy for ArgsOrRets","synthetic":false,"types":[]},{"text":"impl Copy for InstIsSafepoint","synthetic":false,"types":[]},{"text":"impl Copy for StackAMode","synthetic":false,"types":[]},{"text":"impl Copy for MachLabel","synthetic":false,"types":[]},{"text":"impl Copy for AtomicRmwOp","synthetic":false,"types":[]},{"text":"impl Copy for UnwindInfoKind","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Copy for PredicateView&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Detail","synthetic":false,"types":[]},{"text":"impl Copy for Regalloc","synthetic":false,"types":[]},{"text":"impl Copy for OptLevel","synthetic":false,"types":[]},{"text":"impl Copy for TlsModel","synthetic":false,"types":[]},{"text":"impl Copy for LibcallCallConv","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Copy for FlagsOrIsa&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Copy for ValueLocRange","synthetic":false,"types":[]}];
implementors["cranelift_codegen_meta"] = [{"text":"impl Copy for DefIndex","synthetic":false,"types":[]},{"text":"impl Copy for PatternPosition","synthetic":false,"types":[]},{"text":"impl Copy for VarIndex","synthetic":false,"types":[]},{"text":"impl Copy for OpcodeNumber","synthetic":false,"types":[]},{"text":"impl Copy for InstructionPredicateNumber","synthetic":false,"types":[]},{"text":"impl Copy for Register","synthetic":false,"types":[]},{"text":"impl Copy for Stack","synthetic":false,"types":[]},{"text":"impl Copy for OperandConstraint","synthetic":false,"types":[]},{"text":"impl Copy for EncodingRecipeNumber","synthetic":false,"types":[]},{"text":"impl Copy for RegBankIndex","synthetic":false,"types":[]},{"text":"impl Copy for RegClassIndex","synthetic":false,"types":[]},{"text":"impl Copy for BoolSettingIndex","synthetic":false,"types":[]},{"text":"impl Copy for TypeEnvRank","synthetic":false,"types":[]},{"text":"impl Copy for LaneType","synthetic":false,"types":[]},{"text":"impl Copy for SpecialType","synthetic":false,"types":[]},{"text":"impl Copy for ReferenceType","synthetic":false,"types":[]},{"text":"impl Copy for DerivedFunc","synthetic":false,"types":[]},{"text":"impl Copy for TransformGroupIndex","synthetic":false,"types":[]},{"text":"impl Copy for RecipePrefixKind","synthetic":false,"types":[]},{"text":"impl Copy for Isa","synthetic":false,"types":[]},{"text":"impl Copy for Bool","synthetic":false,"types":[]},{"text":"impl Copy for Int","synthetic":false,"types":[]},{"text":"impl Copy for Float","synthetic":false,"types":[]},{"text":"impl Copy for Flag","synthetic":false,"types":[]},{"text":"impl Copy for Reference","synthetic":false,"types":[]}];
implementors["cranelift_codegen_shared"] = [{"text":"impl Copy for IntCC","synthetic":false,"types":[]},{"text":"impl Copy for FloatCC","synthetic":false,"types":[]},{"text":"impl Copy for EncodingBits","synthetic":false,"types":[]},{"text":"impl Copy for OpcodePrefix","synthetic":false,"types":[]}];
implementors["cranelift_entity"] = [{"text":"impl&lt;T:&nbsp;Copy + ReservedValue&gt; Copy for PackedOption&lt;T&gt;","synthetic":false,"types":[]}];
implementors["cranelift_frontend"] = [{"text":"impl Copy for Variable","synthetic":false,"types":[]}];
implementors["cranelift_interpreter"] = [{"text":"impl Copy for FuncIndex","synthetic":false,"types":[]}];
implementors["cranelift_module"] = [{"text":"impl Copy for FuncId","synthetic":false,"types":[]},{"text":"impl Copy for DataId","synthetic":false,"types":[]},{"text":"impl Copy for Linkage","synthetic":false,"types":[]},{"text":"impl Copy for FuncOrDataId","synthetic":false,"types":[]}];
implementors["cranelift_reader"] = [{"text":"impl Copy for Location","synthetic":false,"types":[]}];
implementors["cranelift_wasm"] = [{"text":"impl Copy for WasmType","synthetic":false,"types":[]},{"text":"impl Copy for GlobalVariable","synthetic":false,"types":[]},{"text":"impl Copy for ReturnMode","synthetic":false,"types":[]},{"text":"impl Copy for FuncIndex","synthetic":false,"types":[]},{"text":"impl Copy for DefinedFuncIndex","synthetic":false,"types":[]},{"text":"impl Copy for DefinedTableIndex","synthetic":false,"types":[]},{"text":"impl Copy for DefinedMemoryIndex","synthetic":false,"types":[]},{"text":"impl Copy for DefinedGlobalIndex","synthetic":false,"types":[]},{"text":"impl Copy for TableIndex","synthetic":false,"types":[]},{"text":"impl Copy for GlobalIndex","synthetic":false,"types":[]},{"text":"impl Copy for MemoryIndex","synthetic":false,"types":[]},{"text":"impl Copy for SignatureIndex","synthetic":false,"types":[]},{"text":"impl Copy for DataIndex","synthetic":false,"types":[]},{"text":"impl Copy for ElemIndex","synthetic":false,"types":[]},{"text":"impl Copy for TypeIndex","synthetic":false,"types":[]},{"text":"impl Copy for ModuleIndex","synthetic":false,"types":[]},{"text":"impl Copy for InstanceIndex","synthetic":false,"types":[]},{"text":"impl Copy for EventIndex","synthetic":false,"types":[]},{"text":"impl Copy for ModuleTypeIndex","synthetic":false,"types":[]},{"text":"impl Copy for InstanceTypeIndex","synthetic":false,"types":[]},{"text":"impl Copy for EntityIndex","synthetic":false,"types":[]},{"text":"impl Copy for Global","synthetic":false,"types":[]},{"text":"impl Copy for GlobalInit","synthetic":false,"types":[]},{"text":"impl Copy for Table","synthetic":false,"types":[]},{"text":"impl Copy for TableElementType","synthetic":false,"types":[]},{"text":"impl Copy for Memory","synthetic":false,"types":[]},{"text":"impl Copy for Event","synthetic":false,"types":[]}];
implementors["lightbeam"] = [{"text":"impl Copy for Ieee32","synthetic":false,"types":[]},{"text":"impl Copy for Ieee64","synthetic":false,"types":[]},{"text":"impl Copy for Value","synthetic":false,"types":[]},{"text":"impl Copy for Signedness","synthetic":false,"types":[]},{"text":"impl Copy for Size","synthetic":false,"types":[]},{"text":"impl Copy for SignfulInt","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Copy&gt; Copy for Type&lt;I&gt;","synthetic":false,"types":[]},{"text":"impl Copy for NameTag","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Copy&gt; Copy for BrTarget&lt;L&gt;","synthetic":false,"types":[]},{"text":"impl Copy for MemoryImmediate","synthetic":false,"types":[]},{"text":"impl Copy for ExecutionError","synthetic":false,"types":[]}];
implementors["peepmatic"] = [{"text":"impl&lt;'a, TOperator:&nbsp;Copy&gt; Copy for DynAstRef&lt;'a, TOperator&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Constraint","synthetic":false,"types":[]},{"text":"impl Copy for TraversalEvent","synthetic":false,"types":[]}];
implementors["peepmatic_automata"] = [{"text":"impl Copy for State","synthetic":false,"types":[]}];
implementors["peepmatic_runtime"] = [{"text":"impl Copy for ConditionCode","synthetic":false,"types":[]},{"text":"impl Copy for IntegerId","synthetic":false,"types":[]},{"text":"impl Copy for Else","synthetic":false,"types":[]},{"text":"impl Copy for MatchOp","synthetic":false,"types":[]},{"text":"impl Copy for LhsId","synthetic":false,"types":[]},{"text":"impl Copy for RhsId","synthetic":false,"types":[]},{"text":"impl&lt;TOperator:&nbsp;Copy&gt; Copy for Action&lt;TOperator&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Constant","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Copy&gt; Copy for Part&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Copy + Debug + Eq,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Copy for BitWidth","synthetic":false,"types":[]},{"text":"impl Copy for Kind","synthetic":false,"types":[]},{"text":"impl Copy for Type","synthetic":false,"types":[]},{"text":"impl Copy for UnquoteOperator","synthetic":false,"types":[]}];
implementors["peepmatic_test"] = [{"text":"impl Copy for Instruction","synthetic":false,"types":[]},{"text":"impl Copy for Immediate","synthetic":false,"types":[]}];
implementors["peepmatic_test_operator"] = [{"text":"impl Copy for TestOperator","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Copy for Span","synthetic":false,"types":[]},{"text":"impl Copy for Delimiter","synthetic":false,"types":[]},{"text":"impl Copy for Spacing","synthetic":false,"types":[]}];
implementors["serde"] = [{"text":"impl&lt;E&gt; Copy for UnitDeserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for BoolDeserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for I8Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for I16Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for I32Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for I64Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for IsizeDeserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for U8Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for U16Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for U64Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for UsizeDeserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for F32Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for F64Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for CharDeserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for I128Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for U128Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; Copy for U32Deserializer&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'de, E&gt; Copy for StrDeserializer&lt;'de, E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'de, E&gt; Copy for BorrowedStrDeserializer&lt;'de, E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'de, E&gt; Copy for BorrowedBytesDeserializer&lt;'de, E&gt;","synthetic":false,"types":[]},{"text":"impl Copy for IgnoredAny","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Copy for Unexpected&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Copy for Underscore","synthetic":false,"types":[]},{"text":"impl Copy for Abstract","synthetic":false,"types":[]},{"text":"impl Copy for As","synthetic":false,"types":[]},{"text":"impl Copy for Async","synthetic":false,"types":[]},{"text":"impl Copy for Auto","synthetic":false,"types":[]},{"text":"impl Copy for Await","synthetic":false,"types":[]},{"text":"impl Copy for Become","synthetic":false,"types":[]},{"text":"impl Copy for Box","synthetic":false,"types":[]},{"text":"impl Copy for Break","synthetic":false,"types":[]},{"text":"impl Copy for Const","synthetic":false,"types":[]},{"text":"impl Copy for Continue","synthetic":false,"types":[]},{"text":"impl Copy for Crate","synthetic":false,"types":[]},{"text":"impl Copy for Default","synthetic":false,"types":[]},{"text":"impl Copy for Do","synthetic":false,"types":[]},{"text":"impl Copy for Dyn","synthetic":false,"types":[]},{"text":"impl Copy for Else","synthetic":false,"types":[]},{"text":"impl Copy for Enum","synthetic":false,"types":[]},{"text":"impl Copy for Extern","synthetic":false,"types":[]},{"text":"impl Copy for Final","synthetic":false,"types":[]},{"text":"impl Copy for Fn","synthetic":false,"types":[]},{"text":"impl Copy for For","synthetic":false,"types":[]},{"text":"impl Copy for If","synthetic":false,"types":[]},{"text":"impl Copy for Impl","synthetic":false,"types":[]},{"text":"impl Copy for In","synthetic":false,"types":[]},{"text":"impl Copy for Let","synthetic":false,"types":[]},{"text":"impl Copy for Loop","synthetic":false,"types":[]},{"text":"impl Copy for Macro","synthetic":false,"types":[]},{"text":"impl Copy for Match","synthetic":false,"types":[]},{"text":"impl Copy for Mod","synthetic":false,"types":[]},{"text":"impl Copy for Move","synthetic":false,"types":[]},{"text":"impl Copy for Mut","synthetic":false,"types":[]},{"text":"impl Copy for Override","synthetic":false,"types":[]},{"text":"impl Copy for Priv","synthetic":false,"types":[]},{"text":"impl Copy for Pub","synthetic":false,"types":[]},{"text":"impl Copy for Ref","synthetic":false,"types":[]},{"text":"impl Copy for Return","synthetic":false,"types":[]},{"text":"impl Copy for SelfType","synthetic":false,"types":[]},{"text":"impl Copy for SelfValue","synthetic":false,"types":[]},{"text":"impl Copy for Static","synthetic":false,"types":[]},{"text":"impl Copy for Struct","synthetic":false,"types":[]},{"text":"impl Copy for Super","synthetic":false,"types":[]},{"text":"impl Copy for Trait","synthetic":false,"types":[]},{"text":"impl Copy for Try","synthetic":false,"types":[]},{"text":"impl Copy for Type","synthetic":false,"types":[]},{"text":"impl Copy for Typeof","synthetic":false,"types":[]},{"text":"impl Copy for Union","synthetic":false,"types":[]},{"text":"impl Copy for Unsafe","synthetic":false,"types":[]},{"text":"impl Copy for Unsized","synthetic":false,"types":[]},{"text":"impl Copy for Use","synthetic":false,"types":[]},{"text":"impl Copy for Virtual","synthetic":false,"types":[]},{"text":"impl Copy for Where","synthetic":false,"types":[]},{"text":"impl Copy for While","synthetic":false,"types":[]},{"text":"impl Copy for Yield","synthetic":false,"types":[]},{"text":"impl Copy for Add","synthetic":false,"types":[]},{"text":"impl Copy for AddEq","synthetic":false,"types":[]},{"text":"impl Copy for And","synthetic":false,"types":[]},{"text":"impl Copy for AndAnd","synthetic":false,"types":[]},{"text":"impl Copy for AndEq","synthetic":false,"types":[]},{"text":"impl Copy for At","synthetic":false,"types":[]},{"text":"impl Copy for Bang","synthetic":false,"types":[]},{"text":"impl Copy for Caret","synthetic":false,"types":[]},{"text":"impl Copy for CaretEq","synthetic":false,"types":[]},{"text":"impl Copy for Colon","synthetic":false,"types":[]},{"text":"impl Copy for Colon2","synthetic":false,"types":[]},{"text":"impl Copy for Comma","synthetic":false,"types":[]},{"text":"impl Copy for Div","synthetic":false,"types":[]},{"text":"impl Copy for DivEq","synthetic":false,"types":[]},{"text":"impl Copy for Dollar","synthetic":false,"types":[]},{"text":"impl Copy for Dot","synthetic":false,"types":[]},{"text":"impl Copy for Dot2","synthetic":false,"types":[]},{"text":"impl Copy for Dot3","synthetic":false,"types":[]},{"text":"impl Copy for DotDotEq","synthetic":false,"types":[]},{"text":"impl Copy for Eq","synthetic":false,"types":[]},{"text":"impl Copy for EqEq","synthetic":false,"types":[]},{"text":"impl Copy for Ge","synthetic":false,"types":[]},{"text":"impl Copy for Gt","synthetic":false,"types":[]},{"text":"impl Copy for Le","synthetic":false,"types":[]},{"text":"impl Copy for Lt","synthetic":false,"types":[]},{"text":"impl Copy for MulEq","synthetic":false,"types":[]},{"text":"impl Copy for Ne","synthetic":false,"types":[]},{"text":"impl Copy for Or","synthetic":false,"types":[]},{"text":"impl Copy for OrEq","synthetic":false,"types":[]},{"text":"impl Copy for OrOr","synthetic":false,"types":[]},{"text":"impl Copy for Pound","synthetic":false,"types":[]},{"text":"impl Copy for Question","synthetic":false,"types":[]},{"text":"impl Copy for RArrow","synthetic":false,"types":[]},{"text":"impl Copy for LArrow","synthetic":false,"types":[]},{"text":"impl Copy for Rem","synthetic":false,"types":[]},{"text":"impl Copy for RemEq","synthetic":false,"types":[]},{"text":"impl Copy for FatArrow","synthetic":false,"types":[]},{"text":"impl Copy for Semi","synthetic":false,"types":[]},{"text":"impl Copy for Shl","synthetic":false,"types":[]},{"text":"impl Copy for ShlEq","synthetic":false,"types":[]},{"text":"impl Copy for Shr","synthetic":false,"types":[]},{"text":"impl Copy for ShrEq","synthetic":false,"types":[]},{"text":"impl Copy for Star","synthetic":false,"types":[]},{"text":"impl Copy for Sub","synthetic":false,"types":[]},{"text":"impl Copy for SubEq","synthetic":false,"types":[]},{"text":"impl Copy for Tilde","synthetic":false,"types":[]},{"text":"impl Copy for Brace","synthetic":false,"types":[]},{"text":"impl Copy for Bracket","synthetic":false,"types":[]},{"text":"impl Copy for Paren","synthetic":false,"types":[]},{"text":"impl Copy for Group","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Copy for Cursor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Copy for AttrStyle","synthetic":false,"types":[]},{"text":"impl Copy for BinOp","synthetic":false,"types":[]},{"text":"impl Copy for RangeLimits","synthetic":false,"types":[]},{"text":"impl Copy for TraitBoundModifier","synthetic":false,"types":[]},{"text":"impl Copy for UnOp","synthetic":false,"types":[]},{"text":"impl&lt;'c, 'a&gt; Copy for StepCursor&lt;'c, 'a&gt;","synthetic":false,"types":[]}];
implementors["wasi_common"] = [{"text":"impl Copy for FileType","synthetic":false,"types":[]},{"text":"impl Copy for HandleRights","synthetic":false,"types":[]},{"text":"impl Copy for Clockid","synthetic":false,"types":[]},{"text":"impl Copy for Errno","synthetic":false,"types":[]},{"text":"impl Copy for Rights","synthetic":false,"types":[]},{"text":"impl Copy for Fd","synthetic":false,"types":[]},{"text":"impl Copy for Whence","synthetic":false,"types":[]},{"text":"impl Copy for Filetype","synthetic":false,"types":[]},{"text":"impl Copy for Advice","synthetic":false,"types":[]},{"text":"impl Copy for Fdflags","synthetic":false,"types":[]},{"text":"impl Copy for Fstflags","synthetic":false,"types":[]},{"text":"impl Copy for Lookupflags","synthetic":false,"types":[]},{"text":"impl Copy for Oflags","synthetic":false,"types":[]},{"text":"impl Copy for Eventtype","synthetic":false,"types":[]},{"text":"impl Copy for Eventrwflags","synthetic":false,"types":[]},{"text":"impl Copy for Subclockflags","synthetic":false,"types":[]},{"text":"impl Copy for Signal","synthetic":false,"types":[]},{"text":"impl Copy for Riflags","synthetic":false,"types":[]},{"text":"impl Copy for Roflags","synthetic":false,"types":[]},{"text":"impl Copy for Sdflags","synthetic":false,"types":[]},{"text":"impl Copy for Preopentype","synthetic":false,"types":[]},{"text":"impl Copy for Clockid","synthetic":false,"types":[]},{"text":"impl Copy for Errno","synthetic":false,"types":[]},{"text":"impl Copy for Rights","synthetic":false,"types":[]},{"text":"impl Copy for Fd","synthetic":false,"types":[]},{"text":"impl Copy for Whence","synthetic":false,"types":[]},{"text":"impl Copy for Filetype","synthetic":false,"types":[]},{"text":"impl Copy for Advice","synthetic":false,"types":[]},{"text":"impl Copy for Fdflags","synthetic":false,"types":[]},{"text":"impl Copy for Fstflags","synthetic":false,"types":[]},{"text":"impl Copy for Lookupflags","synthetic":false,"types":[]},{"text":"impl Copy for Oflags","synthetic":false,"types":[]},{"text":"impl Copy for Eventtype","synthetic":false,"types":[]},{"text":"impl Copy for Eventrwflags","synthetic":false,"types":[]},{"text":"impl Copy for Subclockflags","synthetic":false,"types":[]},{"text":"impl Copy for Signal","synthetic":false,"types":[]},{"text":"impl Copy for Riflags","synthetic":false,"types":[]},{"text":"impl Copy for Roflags","synthetic":false,"types":[]},{"text":"impl Copy for Sdflags","synthetic":false,"types":[]},{"text":"impl Copy for Preopentype","synthetic":false,"types":[]}];
implementors["wasmtime"] = [{"text":"impl Copy for ProfilingStrategy","synthetic":false,"types":[]},{"text":"impl Copy for WasmBacktraceDetails","synthetic":false,"types":[]},{"text":"impl Copy for TrapCode","synthetic":false,"types":[]},{"text":"impl Copy for Mutability","synthetic":false,"types":[]}];
implementors["wasmtime_environ"] = [{"text":"impl Copy for BuiltinFunctionIndex","synthetic":false,"types":[]},{"text":"impl Copy for RelocationTarget","synthetic":false,"types":[]},{"text":"impl Copy for ModuleType","synthetic":false,"types":[]},{"text":"impl Copy for TargetSharedSignatureIndex","synthetic":false,"types":[]}];
implementors["wasmtime_jit"] = [{"text":"impl Copy for CompilationStrategy","synthetic":false,"types":[]}];
implementors["wasmtime_profiling"] = [{"text":"impl Copy for NullProfilerAgent","synthetic":false,"types":[]}];
implementors["wasmtime_runtime"] = [{"text":"impl Copy for VMFunctionImport","synthetic":false,"types":[]},{"text":"impl Copy for VMTableImport","synthetic":false,"types":[]},{"text":"impl Copy for VMMemoryImport","synthetic":false,"types":[]},{"text":"impl Copy for VMGlobalImport","synthetic":false,"types":[]},{"text":"impl Copy for VMMemoryDefinition","synthetic":false,"types":[]},{"text":"impl Copy for VMTableDefinition","synthetic":false,"types":[]},{"text":"impl Copy for VMGlobalDefinition","synthetic":false,"types":[]},{"text":"impl Copy for VMSharedSignatureIndex","synthetic":false,"types":[]},{"text":"impl Copy for VMInvokeArgument","synthetic":false,"types":[]}];
implementors["wiggle"] = [{"text":"impl Copy for Region","synthetic":false,"types":[]},{"text":"impl Copy for BorrowHandle","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Pointee, '_&gt; Copy for GuestPtr&lt;'_, T&gt;","synthetic":false,"types":[]}];
implementors["wiggle_test"] = [{"text":"impl Copy for MemArea","synthetic":false,"types":[]}];
implementors["witx"] = [{"text":"impl Copy for BuiltinType","synthetic":false,"types":[]},{"text":"impl Copy for IntRepr","synthetic":false,"types":[]},{"text":"impl Copy for AtomType","synthetic":false,"types":[]},{"text":"impl Copy for TypePassedBy","synthetic":false,"types":[]},{"text":"impl Copy for SizeAlign","synthetic":false,"types":[]},{"text":"impl Copy for UnionLayout","synthetic":false,"types":[]},{"text":"impl Copy for RepEquality","synthetic":false,"types":[]}];
implementors["yanix"] = [{"text":"impl Copy for ClockId","synthetic":false,"types":[]},{"text":"impl Copy for Entry","synthetic":false,"types":[]},{"text":"impl Copy for SeekLoc","synthetic":false,"types":[]},{"text":"impl Copy for FdFlags","synthetic":false,"types":[]},{"text":"impl Copy for AtFlags","synthetic":false,"types":[]},{"text":"impl Copy for Mode","synthetic":false,"types":[]},{"text":"impl Copy for OFlags","synthetic":false,"types":[]},{"text":"impl Copy for FileType","synthetic":false,"types":[]},{"text":"impl Copy for FileTime","synthetic":false,"types":[]},{"text":"impl Copy for PollFlags","synthetic":false,"types":[]},{"text":"impl Copy for PollFd","synthetic":false,"types":[]},{"text":"impl Copy for SockType","synthetic":false,"types":[]},{"text":"impl Copy for PosixFadviseAdvice","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()